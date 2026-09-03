type TransactionType = "expense" | "income"

type Transaction = {
    readonly id: number,
    description: string,
    amount: number
    type: TransactionType
}

const transactions: Transaction[] =[
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

function getTransactionById(transactions: Transaction[], id: number): Transaction | undefined{
    const transaction = transactions.find(t => t.id === id) 
    return transaction
}

function searchTransactions(trasactions: Transaction[], description?: string): Transaction[] | undefined{
    if(description){
        const transaction = transactions.filter(t => t.description === description)
        return transaction
    }
    if(!description){
        return transactions
    }
    
} 

function getBalance(transactions: Transaction[]){
    const transaction = transactions.reduce((total, t) => 
        {
            if(t.type === "expense"){
                total.expense += t.amount
                total.balance -= t.amount
            }
            if(t.type === "income"){
                total.income += t.amount
                total.balance += t.amount
            }
            return total
        },
        {
            expense: 0,
            income: 0,
            balance: 0
        }
    )

    return transaction
}

/*const transaction = getTransactionById(transactions, 7);

if (transaction) {
    console.log(transaction);
}
else{
    console.log("erro")
    console.log(transaction)
}

const t = searchTransactions(transactions);
const tt = searchTransactions(transactions, "Faculdade");

console.log(t)
console.log(tt)*/

const transaction = getBalance(transactions)
console.log(transaction)

