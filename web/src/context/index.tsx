import { ReactNode } from "react"
import { TransactionsContextProvider } from "./Transactions"


interface PropsGlobalContext {
  children: ReactNode
}

export const GlobalContext = ({children}: PropsGlobalContext) => {
  return (
    <TransactionsContextProvider>
      {children}
    </TransactionsContextProvider>
  )
}