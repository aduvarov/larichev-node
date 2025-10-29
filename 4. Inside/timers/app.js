const start = performance.now()
setTimeout(() => {
    console.log(performance.now() - start)
    console.log('Прошла секунда')
}, 1)

function myFunc(arg) {
    console.log(`Аргумент => ${arg}`)
}

setTimeout(myFunc, 1500, 'Класс')

const timerId = setTimeout(() => {
    console.log('BOOOM!')
}, 5000)

setTimeout(() => {
    clearTimeout(timerId)
    console.log('Очищено!')
}, 1000)

const intervalId = setInterval(() => {
    console.log(performance.now())
}, 1000)

setTimeout(() => {
    clearInterval(intervalId)
    console.log('Очищено!')
}, 5000)

console.log('Перед')

setImmediate(() => {
    console.log('После после')
})
console.log('После')
//////////////////
const timer2Id = setTimeout(() => {
    console.log('BOOOM2!')
}, 5000)

timer2Id.unref()

setImmediate(() => {
    timer2Id.ref()
})
