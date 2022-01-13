import {useContext} from "react"
import { TransactionsContext } from "../../context/Transactions"
import { Container } from "./style"
import trashImg from '../../assets/trash.svg'
import { Api } from "../../services/api"

export const TransactionsTable = () => {
    const { transactions, setTransactions} = useContext(TransactionsContext)
    
    const handleDeleteTrasaction = (id: number) => {
      Api.delete(`/transactions/${id}`)
      setTransactions((allTransactions) => allTransactions.filter((transaction) => transaction.id != id ))
    }

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
                        return ( 
                          <tr key={transaction.id}> 
                            <td>
                              {transaction.title}
                            </td>
                            
                            <td className={transaction.type}>
                              {new Intl.NumberFormat('pt-br', {
                                style:'currency',
                                currency:'BRl'
                              }).format(transaction.amount)}
                            </td>
                            
                            <td>
                              {
                                transaction.category
                              }
                            </td>
                            
                            <td>
                              {
                               new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))
                              }
                            </td>
                            <td>
                              <button onClick={() => handleDeleteTrasaction(transaction.id)}>
                                <img src={trashImg} alt="excluir transação" />
                              </button>
                            </td>
                          </tr>
  
                        )}) : null
                        
                      }
                        
                </tbody>

            </table>
        </Container>        
    ) 
}