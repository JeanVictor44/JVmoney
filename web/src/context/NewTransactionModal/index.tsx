import { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react'

type NewTransactionModalContextProps = {
  isNewTransactionModalOpen: boolean,
  setIsNewTransactionModalOpen: Dispatch<SetStateAction<boolean>>,
  handleOpenNewTransactionModal: () => void,
  handleCloseNewTransactionModal:() => void
}

const defaultValue = {
  isNewTransactionModalOpen: false,
  setIsNewTransactionModalOpen: () => {},
  handleOpenNewTransactionModal: () => {},
  handleCloseNewTransactionModal:() => {}
}

export const NewTransactionModalContext = createContext<NewTransactionModalContextProps>(defaultValue)


interface NewTransactionModalContextProviderProps {
  children: ReactNode
}

export const  NewTransactionModalContextProvider = ({children}: NewTransactionModalContextProviderProps) => {
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(defaultValue.isNewTransactionModalOpen) 
  
  const handleOpenNewTransactionModal = () => setIsNewTransactionModalOpen(true)
  const handleCloseNewTransactionModal = () => setIsNewTransactionModalOpen(false)
  
  return (
    <NewTransactionModalContext.Provider value={
      {
        isNewTransactionModalOpen,
        setIsNewTransactionModalOpen,
        handleOpenNewTransactionModal,
        handleCloseNewTransactionModal
      }
    } >
      {
        children
      }
    </NewTransactionModalContext.Provider>
  )
}