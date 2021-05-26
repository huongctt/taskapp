require('../src/db/mongoose')
const User = require('../src/models/user')

//606fb58ffc291b05489e1f71

// User.findByIdAndUpdate('606fb58ffc291b05489e1f71', {age : 20}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 21})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age })
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('606fb58ffc291b05489e1f71', 21).then((count) =>{
    console.log(count)
}).catch((e) => {
    console.log(e)
})