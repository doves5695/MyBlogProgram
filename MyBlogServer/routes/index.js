let express = require('express');
let router = express.Router();
const md5 = require('blueimp-md5')
const models = require('../db/models')
const UserModel = models.getModel('user')
var svgCaptcha = require('svg-captcha')
const users = {}
const sms_until = require('../utils/sms_util')
let dotenv = require('dotenv')
let cors = require('cors')
const { Configuration, OpenAIApi } = require("openai");
const bodyParser = require("body-parser");


// 密码登录
router.post('/login_pwd', function (req,res) {
  const name = req.body.name
  const pwd = md5(req.body.pwd)
  const captcha = req.body.captcha.toLowerCase()
  console.log('/login_pwd', name, pwd, req.session)

  if (captcha !== req.session.captcha) {
    return res.send({code: 1, msg: '验证码不正确'})
  }

  delete req.session.captcha

  UserModel.findOne({name}, function (err, user) {
    if (user) {
      console.log('findUser', user)
      if (user.pwd !== pwd) {
        res.send({code: 1, msg: '用户名或密码不正确!'})
      } else {
        req.session.userid = user._id
        res.send({code: 0, data: {_id:user._id, name: user.name, phone: user.phone}})
      }
    } else {
      const userModel = new UserModel({name, pwd})
      userModel.save(function (err, user) {
        req.session.userid = user._id
        const data = {_id: user._id, name: user.name}
        res.send({code:0, data})
      })
      // userModel.save((err, user) => {
      //   console.log('where',err)
      // })
    }
  })
})


// 一次性图形验证码
router.get('/captcha', function (req, res) {
  var captcha = svgCaptcha.create({
    ignoreChars: '69ed',
    noise: 2,
    color: true
  });
  req.session.captcha = captcha.text.toLowerCase();
  console.log(req.session.captcha)
  res.type('svg')
  res.send(captcha.data)
});


// 发送短信验证码
router.get('/sendcode', function (req,res) {
  let phone = req.query.phone;

  let code = sms_until.randomCode(4);

  console.log(`向${phone}发送短信验证码: ${code}`);

  sms_until.sendCode(phone, code, function (success) {
    if (success) {
      users[phone] = code
      console.log('保存验证码:', phone, code)
      res.send({"code": 0})
    } else {
      res.send({"code": 1, msg: '短信验证码发送失败'})
    }
  })
})


// 短信登录
router.post('/login_sms',function (req, res) {
  var phone = req.body.phone
  var code = req.body.code
  console.log('/login_sms', phone, code);
  if (users[phone] !== code) {
    res.send({code: 1, msg: '手机号或验证码不正确'});
    return;
  }
  // 删除保存的code
  delete users[phone];


  UserModel.findOne({phone}, function (err, user) {
    if (user) {
      req.session.userid = user._id
      res.send({code: 0, data: user})
    } else {
      const userModel = new UserModel({phone})
      userModel.save(function (err, user) {
        req.session.userid = user._id
        res.send({code: 0, data: user})
      })
    }
  })
})


// 退出登录
router.get('/logout',function (req,res) {
  delete req.session.userid

  res.send({code:0})
})

// ai搜索
// dotenv.config()
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_KEY
// });
// const openai = new OpenAIApi(configuration);
//
// // console.log(process.env.OPENAI_KEY)
//
// const app = express()
// app.use(cors());
// app.use(bodyParser.json());
//
// router.post('/aisearch', async function (req, res) {
//   // res.header("Access-Control-Allow-Origin", "*");
//   // res.header("Access-Control-Allow-Methods", "*");
//   // res.header("Access-Control-Allow-Headers", "*");
//   try {
//     const question = req.body.question;
//
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: `${question}`,
//       temperature: 0, // Higher values means the model will take more risks.
//       max_tokens: 1000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
//       top_p: 1, // alternative to sampling with temperature, called nucleus sampling
//       frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
//       presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
//     });
//     res.status(200).send({
//       bot: response.data.choices[0].text
//     })
//   } catch (error) {
//     res.status(500).send(error || "Something went wrong")
//   }
// });
//
// // app.listen(4501, () => {
// //   console.log("App is running")
// // })



module.exports = router;
