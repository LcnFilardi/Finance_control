import { createContext, useEffect, useState, type ReactNode } from "react";
import { useApiTransactions } from "../hooks/useTransactions";
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
    setTransactions: React.Dispatch<React.SetStateAction<Transactions[]>>;
}
interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactonsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transactions[]>([])

    const { getTransactions } = useApiTransactions();

    useEffect(() => {
        async function load() {
            const data = await getTransactions();
            setTransactions(data);
        }
        load();
    }, [getTransactions]);

    /* async function getTransactions(query?: string) {
        const response = await api.get('/transactions', {
            params: {
                q: query,
            }
        })
        
        setTransactions(response.data)
    } */

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                setTransactions,
            }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}