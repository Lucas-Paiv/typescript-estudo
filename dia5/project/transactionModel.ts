type transactionType = "income" | "expense"

export interface Transaction {
    readonly id: number,
    description: string,
    amount: number,
    type: transactionType,
    category?: string
}