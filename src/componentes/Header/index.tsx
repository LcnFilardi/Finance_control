import { HeaderContainer, HeaderContent, NewTransationButton } from "./styles";
// import LogoFinance from '../../assets/logo.svg'

export function Header() {

    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <div>
                        {/* <LogoFinance/> */}
                        logo
                    </div>
                    <NewTransationButton> Nova transação </NewTransationButton>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}