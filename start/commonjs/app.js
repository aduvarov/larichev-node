const { stealRing, characters } = require('./characters.js')
let myChars = characters

myChars = stealRing(characters, 'Фродо')

for (const c of myChars) {
    console.log(c)
}
