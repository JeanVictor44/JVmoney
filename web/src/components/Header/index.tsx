import { 
  Container, 
  LogoContainer, 
  LogoTitle, 
  Content, 
  Button
} from './style'
import {
  useMatch
} from 'react-router-dom'
import { useContext } from 'react'
import { NewTransactionModalContext } from '../../context/NewTransactionModal'
import { NewCreditCardModalContext } from '../../context/NewCreditCardModal'


export const Header = () => {
  const { handleOpenNewTransactionModal: onOpenNewTransactionModal} = useContext(NewTransactionModalContext)
  const {handleOpenNewCreditCardModal: onOpenNewCreditCardModal } = useContext(NewCreditCardModalContext)


  const isInTransactionPage = useMatch('/transacoes')
  const isInCreditCardPage = useMatch('/cartao-de-credito')

  return (
        <Container>
            <Content>
                <LogoContainer>
                  <LogoTitle>JV Money</LogoTitle>
                </LogoContainer>
                {
                  isInTransactionPage ? (
                    <Button type='button' onClick={onOpenNewTransactionModal}>
                      Nova transação 
                    </Button> 
                  
                  ) : isInCreditCardPage ? <Button type='button' onClick={onOpenNewCreditCardModal}>Novo cartão</Button> : null
                }
                
            </Content>
        </Container>

    )
}