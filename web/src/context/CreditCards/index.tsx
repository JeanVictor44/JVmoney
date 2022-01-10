import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { Api } from '../../services/api'

export interface CreditCard {
  number:string | number,
  cvc:string | number,
  name: string,
  expiry: string | number
  
}
type CreditCardsContextProps = {
  creditCards: CreditCard[],
  setCreditCards:Dispatch<SetStateAction<CreditCard[]>>
}

const defaultValue = {
  creditCards: [],
  setCreditCards: () => {}
  
}

export const CreditCardsContext = createContext<CreditCardsContextProps>(defaultValue)

interface CreditCardsContextProviderProps {
  children:ReactNode
} 

export const CreditCardsContextProvider = ({children}:CreditCardsContextProviderProps ) => {
  const [ creditCards, setCreditCards ] = useState<CreditCard[]>([])
  useEffect(() => {
    const getCreditCards = async() => {
      const cards = (await Api.get('/credit-cards')).data
      console.log(cards)
      setCreditCards(cards)
    } 
    getCreditCards()
  },[])
  return (
    <CreditCardsContext.Provider value={
      {
        creditCards,
        setCreditCards
      }
    }>
      {
        children
      }
    </CreditCardsContext.Provider>
  )
}