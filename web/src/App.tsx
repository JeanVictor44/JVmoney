import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header";
import { Grid } from "./components/Grid/style";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import { GlobalContext } from "./context";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { NewCreditCardModal } from "./components/NewCreditCardModal";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Grid>  
        <Router>
          <Sidebar />
          <GlobalContext>
            <Routes />
            <NewTransactionModal />
            <NewCreditCardModal  />
            <Header/>
          </GlobalContext>
        </Router>
      </Grid>
    </>
  )
}

