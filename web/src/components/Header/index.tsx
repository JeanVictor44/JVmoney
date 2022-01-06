import { Container, LogoContainer, LogoTitle, Content, ButtonTransaction} from './style'

interface HeaderProps {
  onOpenNewTransactionModal:() => void
}

export const Header = ({onOpenNewTransactionModal}: HeaderProps) => {


  return (
        <Container>
            <Content>
                <LogoContainer>
                  <LogoTitle>JV Money</LogoTitle>
                </LogoContainer>
                
                <ButtonTransaction type='button' onClick={onOpenNewTransactionModal}>
                  Nova transação
                </ButtonTransaction>
            </Content>
        </Container>

    )
}