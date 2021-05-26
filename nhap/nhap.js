// const pet = {
//     name : 'Hal'
// }


// pet.toJSON = function() {
//     return {}
// }

// console.log(JSON.stringify(pet))

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12333'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('Red12333', hashedPassword)
//     console.log(isMatch)

// }

// myFunction()

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }
// myFunction()