var express = require('express');
var router = express.Router();
const md5 = require('blueimp-md5')
const models = require('../db/models')
const UserModel = models.getModel('user')
var svgCaptcha = require('svg-captcha')
const users = {}


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



module.exports = router;
