const { Worker } = require('worker_threads')
const { fork } = require('child_process')

const workerFunction = array => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', { workerData: { array } })
        worker.on('message', msg => {
            console.log('WORKER. MSG')
            resolve(msg)
        })
        worker.on('error', err => {
            reject(err)
        })
        worker.on('exit', () => {
            console.log('WORKER. DONE!')
        })
    })
}

const forkFunction = array => {
    return new Promise((resolve, reject) => {
        const forker = fork('fork.js')
        forker.send({ array })
        forker.on('message', msg => {
            console.log('FORKER. MSG')
            resolve(msg)
        })
        forker.on('close', code => {
            console.log('FORKER. DONE! code: ' + code)
        })
    })
}

const main = async () => {
    performance.mark('workerStart')
    await workerFunction([25, 19, 48, 30])
    performance.mark('workerEnd')

    performance.mark('forkStart')
    await forkFunction([25, 19, 48, 30])
    performance.mark('forkEnd')

    performance.measure('worker', 'workerStart', 'workerEnd')
    performance.measure('fork', 'forkStart', 'forkEnd')
    console.log(performance.getEntriesByName('worker').pop())
    console.log(performance.getEntriesByName('fork').pop())
}

main()
