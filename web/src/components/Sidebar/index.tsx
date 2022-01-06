import { Container, Nav, LogoImage } from "./style"
import { Link } from "react-router-dom"
import dashboardrImg from '../../assets/dashboard.png'
import transactionsImg from '../../assets/transactions.svg'
import creditCardImg from '../../assets/credit-card.svg'
import retirementsImg from '../../assets/retirements.svg'
import cryptoImg from '../../assets/crypto.svg'
import logoImg from '../../assets/logo.png'

export const Sidebar = () => {
    return (
        <Container>
          <LogoImage src={logoImg} alt="Logo" />
            <Nav>
                <ul>
                        <Link to="/dashboard" >
                        <li>
                            <img src={dashboardrImg} /> 
                            Dashboard
                        </li>
                        </Link>

                        <Link to="/transacoes" >
                        <li>
                            <img src={transactionsImg} /> 
                            Transações
                        </li>
                      </Link>

                      <Link to="/cartao-de-credito" >
                        <li>
                            <img src={creditCardImg} /> 
                            Cartão de crédito
                        </li>
                      </Link> 

                      <Link to="/aposentadoria" >
                        <li>
                            <img src={retirementsImg} />
                            Aposentadoria
                        </li>
                      </Link >

                      <Link to="/criptomoedas" >
                  
                        <li>
                            <img src={cryptoImg} /> 
                            Criptomoedas
                        </li>
                      </Link>
                    
                </ul>
            </Nav>
        </Container>         
    )
}