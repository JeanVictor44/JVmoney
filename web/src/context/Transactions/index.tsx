import { 
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode
} from 'react'

export type Transaction = {
  id: number,
  title: string,
  value: number,
  category: string,
  isOutput:boolean
  date: string
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
  const [ transactions, setTransactions ] = useState<Array<Transaction>>([])

    useEffect(() => {
        fetch('http://localhost:3333/transactions')
            .then(result => result.json())
            .then(transactions => setTransactions(transactions))
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
