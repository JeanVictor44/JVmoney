import { Container, Nav } from "./style"
import { Link } from "react-router-dom"
import settingsImg from '../../assets/settings.png'
import converterImg from '../../assets/converter.png'
import dashboardrImg from '../../assets/dashboard.png'

export const Sidebar = () => {
    return (
        <Container>
            <Nav>
                <ul>
                    <Link to="/dashboard">
                        <li>
                            <img src={dashboardrImg} /> 
                            Dashboard
                        </li>
                    </Link>
                    <Link to="/transacao">
                        <li>
                            <img src={settingsImg} /> 
                            Transação
                        </li>
                    </Link>
                    <Link to="/cartao-de-credito">
                        <li>
                            <img src={settingsImg} /> 
                            Cartão de crédito
                        </li>
                    </Link>

                    <Link to="/aposentadoria">  
                        <li>
                            <img src={converterImg} />
                            Aposentadoria
                        </li>
                    </Link>     
                    <Link to="/configuracoes">
                        <li>
                            <img src={settingsImg} /> 
                            Configurações
                        </li>
                    </Link>
                </ul>
            </Nav>
        </Container>         
    )
}