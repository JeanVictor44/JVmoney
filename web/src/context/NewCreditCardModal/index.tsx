import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

type NewCreditCardModalContextProps = {
  isNewCreditCardModalOpen: boolean,
  setIsNewCreditCardModalOpen: Dispatch<SetStateAction<boolean>>,
  handleOpenNewCreditCardModal: () => void,
  handleCloseNewCreditCardModal:() => void
}

const defaultValue = {
  isNewCreditCardModalOpen: false,
  setIsNewCreditCardModalOpen: () => {},
  handleOpenNewCreditCardModal: () => {},
  handleCloseNewCreditCardModal:() => {}
}

export const NewCreditCardModalContext = createContext<NewCreditCardModalContextProps>(defaultValue)

interface NewCreditCardModalContextProviderProps {
  children: ReactNode
} 

export const NewCreditCardModalContextProvider = ({ children }: NewCreditCardModalContextProviderProps) => {
  const [ isNewCreditCardModalOpen, setIsNewCreditCardModalOpen] = useState(defaultValue.isNewCreditCardModalOpen) 
  
  const handleOpenNewCreditCardModal = () => setIsNewCreditCardModalOpen(true)
  const handleCloseNewCreditCardModal = () => setIsNewCreditCardModalOpen(false)
  return (  
    <NewCreditCardModalContext.Provider 
    value={{
      isNewCreditCardModalOpen,
      setIsNewCreditCardModalOpen,
      handleOpenNewCreditCardModal,
      handleCloseNewCreditCardModal
    }}
    >
      {
        children
      }
    </NewCreditCardModalContext.Provider>
  ) 
}