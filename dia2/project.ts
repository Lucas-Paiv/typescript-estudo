type TransactionType = "income" | "expense"

type Transaction = {
    readonly id: number,
    description: string,
    amount: number
    type: TransactionType
}

const transactions: Transaction[] = [
    {
        id: 1,
        description: "Intership",
        amount: 1000,
        type: "income"

    },
    {
        id: 2,
        description: "Freelas",
        amount: 70,
        type: "income"

    },
    {
        id: 3,
        description: "CLT",
        amount: 2100,
        type: "income"

    },
    {
        id: 4,
        description: "Faculdade",
        amount: 700,
        type: "expense"

    }
]

function getExpenses(transactions: Transaction[]): number{
    const expenses = transactions.filter(transaction => transaction.type === "expense").reduce((total, transaction) => total + transaction.amount, 0)
    return expenses
}

function getIncomes(transactions: Transaction[]): number{
    const incomes = transactions.filter(transaction => transaction.type === "income").reduce((total, transaction) => total + transaction.amount, 0)
    return incomes
}

const expenses = getExpenses(transactions)
console.log(expenses)

const incomes = getIncomes(transactions)
console.log(incomes)