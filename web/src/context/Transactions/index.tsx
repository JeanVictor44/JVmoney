import { 
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode
} from 'react'
import { Api } from '../../services/api'

type TransactionType = 'deposit' | 'withdrawn'

export type Transaction = {
  id: number,
  title: string,
  amount: number,
  category: string,
  type: TransactionType,
  createdAt: Date
}

type PropsTransactionContext = {
  transactions: Transaction[],
  setTransactions: Dispatch<SetStateAction<Transaction[]>>
}

const defaultValue = {
  transactions: [],
  setTransactions: () => {}
}

export const TransactionsContext = createContext<PropsTransactionContext>(defaultValue)

interface PropsTransactionsContextProvider {
  children: ReactNode
} 

export const TransactionsContextProvider = ({children}:PropsTransactionsContextProvider ) => {
  const [ transactions, setTransactions ] = useState<Transaction[]>([])

    useEffect(() => {
        const getTransactions = async() => {
          const response = (await Api.get('transactions')).data
          setTransactions(response)
        }
        getTransactions()
    }, [])

  return (
    <TransactionsContext.Provider value={
      {
        transactions,
        setTransactions
      }
    }>
      {
        children
      }
    </TransactionsContext.Provider>
  )
}
