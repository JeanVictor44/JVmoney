import { Container, GridCards} from "./style"
import Card from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css';
import { CreditCardsContext } from "../../context/CreditCards";
import { useContext } from "react";

export const CreditCards = () => {
  const { creditCards } = useContext(CreditCardsContext)
  
  return (
    <Container>
      <h1>Seus cartões</h1>
      <GridCards>
         {
           creditCards.map(({name,expiry, cvc, number}) => (
             <Card 
              name={name}
              number={number}
              cvc={cvc}
              expiry={expiry}
             />
           ))
         }
      </GridCards>
      
    </Container>
  ) 
} 