import {useContext} from "react"
import { TransactionsContext } from "../../context/Transactions"
import { Container } from "./style"

export const TransactionsTable = () => {
    const { transactions } = useContext(TransactionsContext)

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                      transactions.length > 0 ?
                      transactions.map((transaction) => {
                        /* Format date */
                        const date = new Date(transaction.createdAt)
                        const day = (date.getDate().toString().padStart(2, '0')) 
                        const month = (date.getMonth() + 1).toString().padStart(2, '0')
                        const fullDate = `${day}/${month}/${date.getFullYear()}`
                        
                        /* Format category: Capitalize */
                        const categoryFormated = transaction.category.split(' ').map((word) => {
                          return `${word[0].toLocaleUpperCase()}${word.slice(1)}`
                        }).join(' ')

                        return ( 
                          <tr> 
                            <td>
                              {transaction.title}
                            </td>
                            
                            <td className={transaction.type}>
                              {transaction.amount}
                            </td>
                            
                            <td>
                              {
                                categoryFormated
                              }
                            </td>
                            
                            <td>
                              {
                               fullDate
                              }
                            </td>
                          </tr>
  
                        )}) : null
                        
                      }
                        
                </tbody>

            </table>
        </Container>        
    ) 
}