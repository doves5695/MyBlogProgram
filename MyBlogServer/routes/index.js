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
  if (users[phone] != code) {
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
module.exports = router;
