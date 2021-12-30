import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header";
import { Grid } from "./components/Grid/style";
import { Sidebar } from "./components/Sidebar";
import { Routes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

export function App() {
  
  return (
    <>
      <GlobalStyle />
      <Grid>  
        <Router>
          <Sidebar />
          <Routes />
        </Router>
        <Header />
      </Grid>
    </>
  )
}

