import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header";
import { Grid } from "./components/Grid/style";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import { GlobalContext } from "./context";

export function App() {
  
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
        
        <Header />
      </Grid>
    </>
  )
}

