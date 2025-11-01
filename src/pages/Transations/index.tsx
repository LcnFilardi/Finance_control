import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transations() {

    const {transactions} = useContext(TransactionsContext)    

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
                                                {transaction.type === 'exit' && '- '}
                                                {priceFormatter.format(transaction.value)}
                                            </PriceHighlight>
                                        </td>
                                        <td>{transaction.category}</td>
                                        <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
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