const mongoose = require ('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true ,
    useUnifiedTopology: true,
    useFindAndModify: false
})


// const me = new User({
//     name: '   Le Tran    ',
//     email: '  TKLTKLm@gmail.com',
//     password: 'newword'
// })
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('error', error)
// })


// const task = new Task({
//     description: 'Learn Mongoose',
//     completed: false
// })
// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('error!!!')
// })