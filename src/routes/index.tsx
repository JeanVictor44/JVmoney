import { 
    useRoutes,
    BrowserRouter as Router
} from 'react-router-dom'

import { Dashboard } from '../components/Dashboard'
import { Transactions } from '../pages/Transactions'

export const Routes = () => {
    const routes =  useRoutes([
        { path:'/dashboard', element: <Dashboard />},
        { path: '/transacao', element: <Transactions />}
    ])
    return routes
}
