import { DialogPortal, DialogTitle} from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TypeButton } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { Controller, useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";


const newTransactionFormSchema = z.object({
    description: z.string(),
    value: z.number(),
    category: z.string(),
    type: z.enum(['entry', 'exit']),
})
type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {

    const createNewTransaction = useContextSelector(TransactionsContext, (context) => {
        return context.createNewTransaction
    })

    const {
        control,
        handleSubmit,
        register,
        formState: {
            isSubmitting
        }, 
        reset,
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        // defaultValues:{
        //     type: "entry"
        // }
    })

    async function handleCreateNewTransaction (data: NewTransactionFormInputs) {
        // await new Promise(response => setTimeout(response, 2000))
        const { description, type, category, value } = data

        await createNewTransaction({
            description,
            type,
            category,
            value,
        })

        reset()
    }

    return (
        <DialogPortal>
            <Overlay />

            <Content>
                <DialogTitle>Nova Transação</DialogTitle>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        placeholder="Descrição"
                        required
                        {...register('description')}
                    />
                    <input
                        type="number"
                        placeholder="Preço"
                        required
                        {...register(('value'), { valueAsNumber: true })}
                    />
                    <input
                        type="text"
                        placeholder="Categoria"
                        required
                        {...register('category')}
                    />
                    <Controller
                        control={control}
                        name="type"
                        render={({field:{value, onChange}}) => {
                            return (
                                <TransactionType onValueChange={onChange} value={value}>
                                    <TypeButton variant="entries" value="entry"  >
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TypeButton>
                                    <TypeButton variant="exits" value="exit">
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TypeButton>
                                </TransactionType>
                            )
                        }}
                    /> 
                    <button type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>

            </Content>
        </DialogPortal>
    )
}