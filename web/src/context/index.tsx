import { ReactNode } from "react"
import { TransactionsContextProvider } from "./Transactions"
import { NewTransactionModalContextProvider} from './NewTransactionModal'
import { NewCreditCardModalContextProvider } from "./NewCreditCardModal"

interface PropsGlobalContext {
  children: ReactNode
}

export const GlobalContext = ({children}: PropsGlobalContext) => {
  return (
    <TransactionsContextProvider>
      <NewTransactionModalContextProvider>
        <NewCreditCardModalContextProvider>
          {children}
        </NewCreditCardModalContextProvider>
      </NewTransactionModalContextProvider>
    </TransactionsContextProvider>
  )
}