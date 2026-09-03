//Utilizando o Type

type Transaction = {
    readonly id: number,
    description: string
    expense: boolean
}

const t: Transaction = {
    id: 0,
    description: "",
    expense: false
}

//exemplo acima de tipagem de objeto

//Union Types: pode fazer com que a tipagem de algo seja de um tipo, ou de outro tipo:

type TransactionType = "income" | "expense"

let n: string | boolean

//Interface

interface Transactio {
    id: number,
    description: string,
    amount: number
}

const transaction: Transactio = {
    id: 0,
    description: '',
    amount: 0
}

//Interface (classes, funções) x Types(objetos, arrays). Ex:

