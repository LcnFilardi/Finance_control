
import { Pencil, Trash } from "phosphor-react";
import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { SearchForm } from "../../components/SearchForm";

export function Transations() {
  const transactions  = useContextSelector(TransactionsContext, (context) =>  {
    return context.transactions
  });

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <table>
            {/* 🧭 Cabeçalho da tabela */}
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
                      <Pencil/>
                      <Trash/>
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
