import { Container, GridCards} from "./style"
import Card from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css';

interface CreditCard {
  name: string
  number:string | number
  expiry: string | number
  cvc:string | number
}

interface PropsCreditCard {
  creditCards?:CreditCard[]
}

export const CreditCards = ({creditCards}:PropsCreditCard) => {
  creditCards = creditCards ? creditCards : [
    {
      name:'Fulano de ciclano',
      number:'555555555555',
      expiry:'02/25',
      cvc:'024' 
    },
    {
      name:'Fulano de ciclano',
      number:'555555555555',
      expiry:'02/25',
      cvc:'024' 
    },
    {
      name:'Fulano de ciclano',
      number:'555555555555',
      expiry:'02/25',
      cvc:'024' 
    },
    {
      name:'Fulano de ciclano',
      number:'555555555555',
      expiry:'02/25',
      cvc:'024' 
    },
    {
      name:'Fulano de ciclano',
      number:'555555555555',
      expiry:'02/25',
      cvc:'024' 
    },
    {
      name:'Fulano de ciclano',
      number:'555555555555',
      expiry:'02/25',
      cvc:'024' 
    }
  ]

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