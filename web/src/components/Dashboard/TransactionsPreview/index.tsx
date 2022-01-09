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
              const date = new Date(transaction.createdAt)
              const day = (date.getDate().toString().padStart(2, '0')) 
              const month = (date.getMonth() + 1).toString().padStart(2, '0')
              const fullDate = `${day}/${month}/${date.getFullYear()}`

              return ( 
                <li>
                  <div>
                    <p>{transaction.title}</p>
                    <span>{fullDate}</span>
                  </div>
                  <span className={transaction.type}>{transaction.amount}</span>
                </li>
            )}) : transactions.map((transaction) => {
              const date = new Date(transaction.createdAt)
              const day = (date.getDate().toString().padStart(2, '0')) 
              const month = (date.getMonth() + 1).toString().padStart(2, '0')
              const fullDate = `${day}/${month}/${date.getFullYear()}`
                            
              return ( 
                <li>
                  <div>
                    <p>{transaction.title}</p>
                    <span>{fullDate}</span>
                  </div>
                  <span className={transaction.type}>{transaction.amount}</span>
                </li>
            )})
          }

        </ul>
      </Content>
  )
}