import logoImg from '../../assets/logo.png'
import { Container, LogoContainer, LogoTitle, Content, ButtonTransaction} from './style'

export const Header = () => {
    return (
        <Container>
            <Content>
                <LogoContainer>
                  <LogoTitle>JV Money</LogoTitle>
                </LogoContainer>
                
                <ButtonTransaction type='button'>
                  Nova transação
                </ButtonTransaction>
            </Content>
        </Container>

    )
}