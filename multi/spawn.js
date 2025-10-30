const { spawn } = require('child_process')

const child_process = spawn('ls')

child_process.stdout.on('data', data => {
    console.log(`Stdout: ${data}`)
})
child_process.stderr.on('data', data => {
    console.log(`Stderror: ${data}`)
})

child_process.on('exit', code => {
    console.log(`Код выхода: ${code}`)
})
