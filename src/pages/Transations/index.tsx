import { Header } from "../../componentes/Header";
import { Summary } from "../../componentes/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transations() {
    return (

        <div>
            <Header />
            <Summary />

            <TransactionsContainer>

                <SearchForm/>
                
                <TransactionsTable>
                    <table>
                        <tbody>
                            <tr>
                                <td width="60%">Desenvolvimento de site</td>
                                <td width={"20%"}>
                                    <PriceHighlight variant="income">
                                        R$ 12.000,00
                                    </PriceHighlight>
                                </td>
                                <td>Venda</td>
                                <td>13/04/2022</td>
                            </tr>
                            <tr>
                                <td width="60%">Alimentação</td>
                                <td width={"20%"}>
                                    <PriceHighlight variant="outcome">
                                        - R$ 60,00
                                    </PriceHighlight>
                                </td>
                                <td>Venda</td>
                                <td>13/04/2022</td>
                            </tr>
                        </tbody>
                    </table>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}