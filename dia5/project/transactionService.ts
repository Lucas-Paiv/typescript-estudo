import { Transaction } from "./transactionModel.ts"

export class TransactionService {
    private transactions: Transaction[] = []

    add(transaction: Transaction[]): void {
        transaction.forEach(t => {
            this.transactions.push(t)
        }); 
    }
    
    getAll(): Transaction[] | undefined {
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
                else{
                    account -= t.amount
                }

                return account
            }, 
        0)
    }

    removeTransaction(id: number): Boolean{
        const index = this.transactions.findIndex(t => t.id === id)
        if(index === -1){
            return false
        }    
        this.transactions.splice(index)

        return true
        
    }
}