process.on('message', msg => {
    if (msg == 'Disconnect') {
        console.log(`Клиент получил: ${msg}`)
        console.log('Клиент. Отправляю сообщение "Отключаюсь..."')
        process.send('Отключаюсь...')
        process.disconnect()
        return
    }
    console.log(`Клиент получил: ${msg}`)
    console.log('Клиент. Отправляю сообщение Pong')
    process.send('Pong!')
})
