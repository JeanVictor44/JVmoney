import { TransactionsPreview } from "./TransactionsPreview"
import { Grid } from './style'
import { CreditCardPreview } from "./CreditCardPreview"
import { Preview } from "./Preview"

export const Dashboard = () => {
    return (
      /* Grid aqui */
    <Grid>
      
      <Preview title='Transações'>
        <TransactionsPreview />
      </Preview>
      
      <Preview title='Cartões de crédito'>
        <CreditCardPreview />
      </Preview>
      
    </Grid>
    )
}