const { fork } = require('child_process')

const forkProcess = fork('forkChild.js')

forkProcess.on('message', msg => {
    console.log(`Главный. Получено : ${msg}`)
})

forkProcess.on('close', code => {
    console.log(`Главный. Клиент завершился с кодом: ${code}`)
})

console.log('Главный. Отправляю сообщение Ping...')
forkProcess.send('Ping')

setTimeout(() => {
    console.log('Главный. Отправляю сообщение disconnect...')
    forkProcess.send('Disconnect')
}, 3000)
