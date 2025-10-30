const { exec } = require('child_process')

const child_process = exec('ls', (err, stdout, stderr) => {
    if (err) {
        console.error(err.message)
    }
    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
})

child_process.on('exit', code => {
    console.log(`Код выхода: ${code}`)
})
