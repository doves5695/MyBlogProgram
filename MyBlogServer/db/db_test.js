/*
 测试使用mongoose操作mongodb数据库
 */

const md5 = require('blueimp-md5')

// 1. 连接数据库
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/myblog_server')

const conn = mongoose.connection

conn.on('connected', function () {
    console.log('数据库连接成功,yeah!!!')
})


// 2.得到对应特定集合的Model: UserModel
const  userSchema = mongoose.Schema({
    // 用户名
    'name': {type: String},
    // 密码
    'pwd': {type: String},
    // 类型
    'phone': {'type': String}
})
const UserModel = mongoose.model('user',userSchema) // 集合的名字是users


// 通过Model或其实例对集合数据进行CRUD操作
// 1. 通过Model实例save添加数据
function testSave() {
    const user = {
        name: 'dove',
        pwd: md5('123')
    }
    const userModel = new UserModel(user)
    userModel.save((error,user) => {
        console.log('save()',error, user)
    })
}
// testSave()
// 2. 通过Model实例find/findOne查询多个或一个数据
function testFind() {
    // 查找多个
    UserModel.find((error, users) => console.log('find()', error, users))
    // 查找一个
    UserModel.findOne({_id: '6469e8aa7807b42f7cddcc14'}, (error, user) => {
        console.log('findOne()', error, user)
    })
}
// testFind()
// 3. 通过Model实例findByIdAndUpdate更新某个数据
function  testUpdate() {
    UserModel.findByIdAndUpdate({_id: '6469e8aa7807b42f7cddcc14'}, {name: 'jingrui'}, (error, user) => {
        console.log('findByIdAndUpdate()', error, user)
    })
}
// testUpdate()
// 4. 通过Model实例remove删除匹配数据
function testDelete() {
    UserModel.remove({_id:'646b1cca00f29a47782183a6'}, (error, result) => {
        console.log('remove()', error, result)
    })
}
testDelete()
