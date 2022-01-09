import { Container } from "./style"
import CreditCard from 'react-credit-cards'

export const CreditCardPreview = () => {
  return (
    <Container>
      <CreditCard 
        name="Jean Victor"
        number="222222222"
        cvc={222}
        expiry='02/21'
      />     
    </Container>
  )
}