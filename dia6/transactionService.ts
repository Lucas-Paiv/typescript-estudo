import {Transaction} from "./transactionModel.ts"

export class TransactionService {
    private transactions: Transaction[] = []

    add(transaction: Transaction[]): void{
        transaction.forEach(t => {
            this.transactions.push(t)
        });
    }

    getAll(): Transaction[]{
        return [...this.transactions]
    }

    getById(id: number): Transaction | undefined{
        return this.transactions.find(t => t.id === id)
    }

    getBalance(): number{
        return this.transactions.reduce((total, t) =>
            {
                if(t.type === "income"){
                    total += t.amount
                }
                else{
                    total -= t.amount
                }
                return total
            }, 
        0)
    }

    remove(id: number): boolean{
        const index = this.transactions.findIndex(t => t.id === id)
        if(index === -1){
            return false
        }
        this.transactions.splice(index, 1)
        return true
    }

}