import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {

    const { transactions } = useContext(TransactionsContext)
    // console.log("transactions : ", transactions)

    const summary = transactions.reduce(
        (acc, transaction) => {
            if(transaction.type === 'entry'){
                acc.entry += transaction.value;
                acc.total += transaction.value;
            }else {
                acc.exit += transaction.value;
                acc.total -= transaction.value;
            }

            return acc
        },
        {
            entry: 0,
            exit: 0,
            total: 0
        })

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#88b37e" />
                </header>
                <strong>{summary.entry}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>{summary.exit}</strong>
            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#88b37e" />
                </header>
                <strong>{summary.total}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}