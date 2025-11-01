import { createContext, useEffect, useState, type ReactNode } from "react";
interface Transactions {
    id: number;
    description: string;
    type: 'entries' | 'exits';
    category: string;
    value: number;
    createdAt: string;
}
interface TransactonsContextType {
    transactions: Transactions[];
}
interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactonsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transactions[]>([])

    async function getTransactions() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()

        setTransactions(data)
        console.log("Data: ", transactions)
    }

    useEffect(() => {
        getTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}