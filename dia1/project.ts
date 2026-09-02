const description: string = "Compra de supermercado"
const amount: number = 250
const isExpense: boolean = true

function calculateDouble(number: number): void{
    const double = number*2
    console.log(double)
}

calculateDouble(200)

type Transaction = {
    readonly id: number,
    description: string,
    amount: number
}

const transaction: Transaction[] = [
    {
        id: 1,
        description: "Salário",
        amount: 5000
    },
    {
        id: 2,
        description: "Freelas",
        amount: 70
    },
    {
        id: 3,
        description: "Faculdade",
        amount: 700
    }
]

function getTotal(transactions: Transaction[]){
    const sum = transactions.reduce((total, t) => total += t.amount ,0)
    return sum 
}

const sum = getTotal(transaction)
console.log(sum)