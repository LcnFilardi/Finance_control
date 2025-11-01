import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useSummary() {
    const { transactions } = useContext(TransactionsContext)

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'entry') {
                acc.entry += transaction.value;
                acc.total += transaction.value;
            } else {
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
        
    return summary
}