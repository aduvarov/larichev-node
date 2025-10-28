let characters = [
    { name: 'Фродо', hasRing: false },
    { name: 'Бильбо', hasRing: false },
]

function stealRing(characters, owner) {
    return characters.map(c => {
        if (c.name == owner) {
            return { name: c.name, hasRing: true }
        } else {
            return { ...c }
        }
    })
}

module.exports = { characters, stealRing }
