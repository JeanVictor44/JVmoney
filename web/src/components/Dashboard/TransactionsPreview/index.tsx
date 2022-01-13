import { useContext } from 'react'
import { TransactionsContext } from '../../../context/Transactions'
import { Content } from './style'

export const TransactionsPreview = () => {
  const { transactions } = useContext(TransactionsContext)
  return (
      <Content>
        <ul>
          { 
            transactions.length > 3 ? 
            transactions.slice(0,3).map((transaction) => {
              return ( 
                <li>
                  <div>
                    <p>{transaction.title}</p>
                    <span>
                      {new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))}
                    </span>
                  </div>
                  <span className={transaction.type}>
                  {new Intl.NumberFormat('pt-br', {
                      style:'currency',
                      currency:'BRL'
                    }).format(transaction.amount)}
                  </span>
                </li>
            )}) : transactions.map((transaction) => {              
              return ( 
                <li>
                  <div>
                    <p>{transaction.title}</p>
                    <span>
                      {new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))}
                    </span>
                  </div>
                  <span className={transaction.type}>
                    {new Intl.NumberFormat('pt-br', {
                      style:'currency',
                      currency:'BRL'
                    }).format(transaction.amount)}
                  </span>
                </li>
            )})
          }

        </ul>
      </Content>
  )
}