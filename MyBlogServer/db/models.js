const mongoose = require('mongoose')
const {model} = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/myblog_server')
const conn = mongoose.connection
conn.on('connected', function () {
    console.log('数据库连接成功!!!')
})
const userSchema = mongoose.Schema({
    // 用户名
    'name': {type: String},
    // 密码
    'pwd': {type: String},
    // 类型
    'phone': {'type': String}
})
UserModel = mongoose.model('user', userSchema)

module.exports = {
    getModel(name) {
        return mongoose.model(name)
    }
}
