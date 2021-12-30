import { Container, Nav } from "./style"
import settingsImg from '../../assets/settings.png'
import converterImg from '../../assets/converter.png'
import dashboardrImg from '../../assets/dashboard.png'

export const Sidebar = () => {
    return (
        <Container>
            <Nav>
                <ul>
                    <li><img src={dashboardrImg} /> Dashboard</li>
                    <li><img src={settingsImg} /> Transação</li>
                    <li><img src={settingsImg} /> Cartão de crédito</li>
                    <li><img src={converterImg} />Aposentadoria</li>
                    <li><img src={settingsImg} /> Configurações</li>
                </ul>
            </Nav>
        </Container>         
    )
}