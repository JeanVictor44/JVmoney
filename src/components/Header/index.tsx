import logoImg from '../../assets/logo.png'
import { Container, LogoContainer, LogoImage, LogoTitle, Content, ButtonTransaction} from './style'

export const Header = () => {
    return (
        <Container>
            <Content>
                <LogoContainer>
                    <LogoImage src={logoImg} alt='jv money' />
                    <LogoTitle>JV Money</LogoTitle>
                </LogoContainer>
                
                <ButtonTransaction type='button'>
                    Nova transação
                </ButtonTransaction>
            </Content>
        </Container>

    )
}