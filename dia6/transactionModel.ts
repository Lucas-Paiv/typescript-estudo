type transactionType = "income" | "expense"

type transactionCategory = "food" | "transport" | "education" | "housing"

interface ExpenseTransaction {
    readonly id: number,
    description: string,
    amount: number,
    type: transactionType,
    category?: transactionCategory

}

interface IncomeTransaciton {
    readonly id: number,
    description: string,
    amount: number,
    type: transactionType
}

export type Transaction = IncomeTransaciton | ExpenseTransaction