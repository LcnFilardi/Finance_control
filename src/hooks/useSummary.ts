import { TransactionsContext } from "../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

export function useSummary() {
    const transactions  = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
    })

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