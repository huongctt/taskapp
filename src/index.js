const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/task.js')

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000 //byte

    },
    fileFilter(req, file,cb) {
        if(!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please update a doc'))
        }
        cb(undefined, true)
        // cb(new Error('File must be jpg, png'))
        // cb(undefined, true)
        // cb(undefined, false)
    }
})

app.post('/upload', upload.single('upload'), (req, res) => { // trong single la key cua postman

    res.send()
})

// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down')

// })



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,() => {
    console.log('Server is on port: ' + port )
})


// const main = async () => {
//     // const task = await Task.findById('60861be8cd85e23118559c24')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('60861baccd85e23118559c22')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()

