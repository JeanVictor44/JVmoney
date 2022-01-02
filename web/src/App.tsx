import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header";
import { Grid } from "./components/Grid/style";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";

export function App() {
  
  return (
    <>
      <GlobalStyle />
      <Grid>  
        {/* Agora vamos construir as rotaaaas  */}
        {/* Enovlva o componente com os links no router para que ele identifique os links para as rotas */}
        <Router>
          <Sidebar />
          <Routes />
        </Router>
        
        <Header />
      </Grid>
    </>
  )
}

