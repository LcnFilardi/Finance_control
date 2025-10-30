import { DialogClose, DialogPortal, DialogTitle} from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { RadioGroup } from "@radix-ui/react-radio-group";

export function NewTransactionModal() {


    return (
        <DialogPortal>
            <Overlay />

            <Content>
                <DialogTitle>Nova Transação</DialogTitle>

                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form>
                    <input type="text" placeholder="Descrição" required/>
                    <input type="text" placeholder="Preço" required/>
                    <input type="text" placeholder="Categoria" required/>
                    
                    <TransactionType>
                        <TypeButton variant="income" value="entry"  >
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </TypeButton>
                        <TypeButton variant="outcome" value="exit">
                            <ArrowCircleDown size={24}/>
                            Saída
                        </TypeButton>
                    </TransactionType>

                                   
                    
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>

            </Content>b
        </DialogPortal>
    )
}