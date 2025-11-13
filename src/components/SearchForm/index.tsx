import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {

    const getTransactions = useContextSelector(TransactionsContext, (context) => {
        return context.getTransactions
    })

    const {
        register,
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearch (data: SearchFormInputs) {
        // Simulando uma requisição após 2 seg
        // await new Promise(response => setTimeout(response, 2000))
        await getTransactions(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
            <input
                type="text"
                placeholder="Busque por transações"
                {...register('query')}
            />

            <button disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}   