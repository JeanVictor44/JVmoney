import { ReactNode } from "react"
import { TransactionsContextProvider } from "./Transactions"
import { CreditCardsContextProvider } from "./CreditCards"
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
          <CreditCardsContextProvider>
            {children}
          </CreditCardsContextProvider>
        </NewCreditCardModalContextProvider>
      </NewTransactionModalContextProvider>
    </TransactionsContextProvider>
  )
}