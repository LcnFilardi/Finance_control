
import { Pencil, Trash } from "phosphor-react";
import { useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useApiTransactions } from "../../hooks/useTransactions";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transations() {

  const { transactions, setTransactions } = useContext(TransactionsContext);

  const { updateTransaction, deleteTransaction } = useApiTransactions();

  async function handleDelete(id: number) {

    await deleteTransaction(id);

    // Atualiza o estado global do context
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <table>

            <thead>
              <tr>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td width="60%">{transaction.description}</td>
                    <td width={"20%"}>
                      <PriceHighlight variant={transaction.type}>
                        {transaction.type === "exit" && "- "}
                        {priceFormatter.format(transaction.value)}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                    <td>
                      <Pencil />
                      <button onClick={() => handleDelete(transaction.id)}>
                        <Trash />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}