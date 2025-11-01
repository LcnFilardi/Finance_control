import { NewTransactionModal } from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransationButton } from "./styles";
// import LogoFinance from '../../assets/logo.svg'
import { Dialog, DialogTrigger} from "@radix-ui/react-dialog";

export function Header() {

    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <div>
                        logo
                    </div>
                    {/* <img src={LogoFinance} alt=""/> */}

                    <Dialog>
                        <DialogTrigger asChild>
                            <NewTransationButton> Nova transação </NewTransationButton>
                        </DialogTrigger>

                        <NewTransactionModal/>
                        
                    </Dialog>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}