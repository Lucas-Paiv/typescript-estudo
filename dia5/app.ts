//Classes

type TransactionType = "income" | "expense"

interface Transaction{
    readonly id: number,
    description: string,
    amount: number,
    type: TransactionType,
    category?: string
}

class TransactionService{
    private transactions: Transaction[] = []

    //apenas uma transação
    add(transaction : Transaction): void {
        this.transactions.push(transaction)
    }

    //uma ou mais transação
    addMore(transaction: Transaction[]): void {
        transaction.forEach(t => {
            this.transactions.push(t)
        });
    }

    getAll(): Transaction[] {
        return this.transactions
    }

    getById(id: number): Transaction | undefined {
        return this.transactions.find(t => t.id === id)
    }

    getBalance(): number {
        return this.transactions.reduce((account, t) => 
            {
                if(t.type === "income"){
                    account += t.amount
                }
                else {
                    account -= t.amount
                }

                return account
            }, 
        0)
    }
}

const transactions: Transaction[] = [
    {
        id: 1,
        description: "Salário",
        amount: 3000,
        type: "income"

    },
    {
        id: 2,
        description: "Supermercado",
        amount: 500,
        type: "expense",
        category: "food"
    }
]

const transaction = new TransactionService()
transaction.addMore(transactions)
console.log(transaction)
console.log(transaction.getAll)
console.log(transaction.getById(2))
const amount = transaction.getBalance()
console.log(amount)

