import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { useApiTransactions } from "../../hooks/usetransactions";
import { SearchFormContainer } from "./styles";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {

    const { getTransactions } = useApiTransactions()

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