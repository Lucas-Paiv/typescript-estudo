//Generic: Cria um função genérica, que pode ser usada de fonte para outras funções extenderem

function getFirst<T>(items: T[]): T {
    return items[0]
}

function getThird<T>(items: T[]): T {
    return items[0]
}

//T funciona como nosso parametro de tipo 

const n = getFirst<string>(["Lucas", "João"])

//essa função equivale a function getFirst(items: string[]): string

function getById<T extends { id: number }>(
    items: T[],
    id: number
): T | undefined {
    return items.find(item => item.id === id)
}

//em <T extends {id: number}>, ele me diz que T pode ser de qualquer tipo, desde que tem o elemento id: number

