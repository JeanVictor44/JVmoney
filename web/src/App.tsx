import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header";
import { Grid } from "./components/Grid/style";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import { GlobalContext } from "./context";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

export function App() {
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  /* Handle -> funções que respondem à ações do usuário*/
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true) 
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <GlobalStyle />
      <Grid>  
        
        <Router>
          <Sidebar />
          <GlobalContext>
            <Routes />
          </GlobalContext>
        </Router>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
        
      </Grid>
    </>
  )
}

