import { TransactionService } from "./transactionService.ts"
import { Transaction } from "./transactionModel.ts"

const transaction = new TransactionService()

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

transaction.add(transactions)
console.log(transaction.getAll())
const amount = transaction.getBalance()
console.log(amount)
console.log(transaction.getById(2))
transaction.remove(1)
console.log(transaction.getAll())

