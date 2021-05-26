require('../src/db/mongoose')
const Task = require('../src/models/task')

//606fb8e0614b550020aa5098

// Task.findByIdAndRemove('606fb8e0614b550020aa5098').then((task) => {
//     if(!task) {
//         console.log('No task with that id')
//     } else {
//         console.log(task)
//     }
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e)=> {
//     console.log(e)
// })

const removeTaskAndCount = async (id) => {
    const task = await Task.findByIdAndRemove('606fb8e0614b550020aa5098');
    const count = await Task.countDocuments({completed: false})
    return count
}

// removeTaskAndCount('606fb8e0614b550020aa5098').then((result) =>{
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateTaskand

