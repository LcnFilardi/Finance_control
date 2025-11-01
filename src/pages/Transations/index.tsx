import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transactions {
    id: number;
    description: string;
    type: 'entries' | 'exits';
    category: string;
    value: number;
    createdAt: string;
}

export function Transations() {

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

        <div>
            <Header />
            <Summary />

            <TransactionsContainer>

                <SearchForm />

                <TransactionsTable>
                    <table>
                        <tbody>
                            {transactions.map(transaction => {
                                return (
                                    <tr key={transaction.id}>
                                        <td width="60%">{transaction.description}</td>
                                        <td width={"20%"}>
                                            <PriceHighlight variant={transaction.type}>
                                                {transaction.value}
                                            </PriceHighlight>
                                        </td>
                                        <td>{transaction.category}</td>
                                        <td>{transaction.createdAt}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}