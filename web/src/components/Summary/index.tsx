import { Container, Card} from './style'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../context/Transactions'
import { useContext, useEffect, useState } from 'react'

/*  precisa das propriedade do transactions -> value, isOutput */

export const Summary = () => {
    const { transactions } = useContext(TransactionsContext)
    const [ inputSum, setInputSum ] = useState(0)
    const [ outputSum, setOutputSum ] = useState(0)
    const [ total, setTotal ] = useState(0)

    useEffect(() => {
      /* Calculate and set input sum */
      const tranactionsInput = transactions.filter(transaction => !transaction.isOutput)
      const tranactionsInputSum = tranactionsInput.reduce((acc, transaction) => {
        return acc + transaction.value
      },0)
      setInputSum(tranactionsInputSum)
      
      /* Calculate and set output sum*/
      const tranactionsOutput = transactions.filter(transaction => transaction.isOutput)
      const tranactionsOutputSum = tranactionsOutput.reduce((acc, transaction) => {
        return acc + transaction.value
      },0)
      setOutputSum(tranactionsOutputSum)

      setTotal(inputSum - outputSum)

    }, [transactions])

    return (
        <Container>
            <Card>
                <header>
                    <p >Entradas</p>
                    <img src={incomeImg} alt='Entradas' />
                </header>
                <strong className='input-color'>${inputSum}</strong>
            </Card>

            <Card>
                <header>
                    <p >Saídas</p>
                    <img src={outcomeImg} alt='Saídas' />
                </header>
                <strong className='output-color'>- ${outputSum}</strong>
            </Card>

            <Card className='highlitght-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt='Total' />
                </header>
                <strong>
                  ${total}
                </strong>
            </Card>
        </Container>
    )
}