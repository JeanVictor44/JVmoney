import {
  useRoutes,
  Navigate
} from 'react-router-dom'
import { Dashboard } from '../components/Dashboard'
import { Transactions } from '../pages/Transactions/'

export const Routes = () => {
  /* Cada objeto representa uma rota  */
  /* o componente navigate permite fazer redirect */
  const routes = useRoutes([ 
    {path: '/', element: <Navigate to='/dashboard'/>},
    {path: '/dashboard', element: <Dashboard />},
    {path: '/transacoes' , element: <Transactions/>}
  ])
  return routes
}