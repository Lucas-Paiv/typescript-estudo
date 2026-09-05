interface User {
    id: number,
    name: string
}

function getFirst<T>(items: T[]): T | undefined{
    return items[0]
}

function getById<T extends {id: number}>(items: T[], id: number): T | undefined{
    return items.find(t => t.id === id)
}

function getByName<T extends {name: string}>(item: T[], name: string){
    return item.find(t => t.name === name)
}

const names = ["João", "Gabriel", "Jeysson"]

const firstNames = getFirst(names)

const numbers = [24, 100, 124]

const firstNumbers = getFirst(numbers)

const usuarios: User[] = [
    {
        id: 1,
        name: "João"
    },
    {
        id: 2,
        name: "Lucas"
    },
    {
        id: 3,
        name: "Gabriel"
    }
] 

const usuario = getById(usuarios, 2)
const u = getByName(usuarios, "Gabriel")


console.log(firstNames)
console.log(firstNumbers)
console.log(usuario)
console.log(u)