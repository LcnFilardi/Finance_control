import { useCallback, useEffect, useState, type ReactNode } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";
interface Transactions {
    id: number;
    description: string;
    type: 'entry' | 'exit';
    category: string;
    value: number;
    createdAt: string;
}
interface TransactonsContextType {
    transactions: Transactions[];
    getTransactions: (query?: string) => Promise<void>
    createNewTransaction: (data: TransactionsCreate) => Promise<void>
}
interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsCreate{
    description: string;
    type: 'entry' | 'exit';
    category: string;
    value: number;
}

export const TransactionsContext = createContext({} as TransactonsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transactions[]>([])

    async function getTransactions(query?: string) {
        const response = await api.get('/transactions', {
            params: {
                q: query,
            }
        })
        
        setTransactions(response.data)
    }

    const createNewTransaction = useCallback(async(data: TransactionsCreate) => {
        // await new Promise(response => setTimeout(response, 2000))
        
        const {description, value, type, category} = data;

        const response = await api.post('/transactions', {
            description,
            category,
            type,
            value,
            createdAt: new Date(),
        })
        setTransactions(state => [response.data,...state])
    }, [])

    useEffect(() => {
        getTransactions()
    }, [])

    return (
        <TransactionsContext.Provider
            value={{ 
                transactions,
                getTransactions,
                createNewTransaction,
            }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}