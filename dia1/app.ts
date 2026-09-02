//O que é o TypeScript?
//Um superset do Typescript, uma linguagem criada em cima do JS, com melhorias/informações adicionais.

//JS: let amount = 100
//TS: let amount: number = 100
let amount: number = 100

//tipos fundamentais: number, string, boolean, void(sem valor), undefined(não informado), null(não tem valor).

//Normalmente notations (informar o tipo da variável) somente é feita quando o objeto não é iniciada com valor

let object: string

//além disso, também conseguimos tipar arrays:

const descriptions: string[] = [
    "Salário",
    "Mercado",
    "Aluguel"
]

const amounts: number[] =[
    1000,
    2500,
    10
]

console.log(amounts)

//também podemos fazer por tipos de objetos.
