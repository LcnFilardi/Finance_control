import { useState } from "react";
import { NewTransactionModal } from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransationButton } from "./styles";
// import LogoFinance from '../../assets/logo.svg'
import { Dialog, DialogTrigger} from "@radix-ui/react-dialog";

export function Header() {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <div>
                        logo
                    </div>
                    {/* <img src={LogoFinance} alt=""/> */}

                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <NewTransationButton> Nova transação </NewTransationButton>
                        </DialogTrigger>

                        <NewTransactionModal closeDialog={() => setOpen(false)}/>
                        
                    </Dialog>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}