import { characters, greet } from './characters.mjs'
import * as char from './characters.mjs'
import mylog from './characters.mjs'
import mylog2, { characters as ch, greet as gr } from './characters.mjs'

char.characters.push('Назгул')

for (const c of characters) {
    greet(c)
}

mylog()
mylog2()

async function main() {
    const { characters, greet } = await import('./characters.mjs')
    for (const c of characters) {
        greet(c)
    }
}

main()
