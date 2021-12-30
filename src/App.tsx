import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header";
import { Grid } from "./components/Grid/style";
import { Sidebar } from "./components/Sidebar";
import { Transactions } from "./components/Transactions";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Grid>
        <Sidebar />
        <Header />
        <Transactions />
      </Grid>
    </>
  )
}

