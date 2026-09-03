type TransactionCategory =
    | "food"
    | "transport"
    | "education"
    | "housing"

type IncomeTransaction = {
    readonly id: number
    description: string
    amount: number
    type: "income"
}

type ExpenseTransaction = {
    readonly id: number
    description: string
    amount: number
    type: "expense"
    category: TransactionCategory
}

type Transaction = IncomeTransaction | ExpenseTransaction

const transaction: Transaction[] = [
    {
        id: 1,
        description: "Salário",
        amount: 2100,
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
        description: "Faculdade",
        amount: 600,
        type: "expense",
        category: "education"
    },
    {
        id: 4,
        description: "IFood",
        amount: 50,
        type: "expense",
        category: "food"
    }   
]

function getTransactionDescription(transactions: Transaction[]): string[]{
    return transactions.map(transaction =>
        `${transaction.description} - ${transaction.type}`
    )
}

function getCategory(transactions: Transaction[]): string[] {
    const transaction = transactions.map(t => {
        if(t.type === "expense"){
            return t.category
        }
        
        return "Sem categoria"
        
    })

    return transaction
}