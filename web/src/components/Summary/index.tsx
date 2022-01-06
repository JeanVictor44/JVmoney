import { Container, Card} from './style'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../context/Transactions'
import { useContext, useEffect, useState } from 'react'

export const Summary = () => {
    const { transactions } = useContext(TransactionsContext)
    const [ inputSum, setInputSum ] = useState(0)
    const [ outputSum, setOutputSum ] = useState(0)
    const [ total, setTotal ] = useState(0)

    const addInputTransaction = () => {
      const tranactionsInput = transactions.filter(transaction => transaction.type === 'deposit')
      const sumInputTransaction = tranactionsInput.reduce((acc, transaction) => {
        return acc + transaction.amount
      },0)
      return sumInputTransaction
      
    }
    const addOutputTransaction = () => {
       /* Calculate and set output sum*/
       const tranactionsOutput = transactions.filter(transaction => transaction.type === 'withdrawn')
       const sumOutputTransaction = tranactionsOutput.reduce((acc, transaction) => {
         return acc + transaction.amount
       },0)
       return sumOutputTransaction
    }
    
    useEffect(() => {
      const sumInputTransaction = addInputTransaction()
      const sumOutputTransaction = addOutputTransaction()

      setInputSum(sumInputTransaction)
      setOutputSum(sumOutputTransaction)

      setTotal(sumInputTransaction - sumOutputTransaction)

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