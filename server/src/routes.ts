import { Router } from "express";
import TransactionController from "./controllers/TransactionController";
import CredtiCardController from './controllers/CreditCardController'
const routes = Router()

/* Tramsactions */
routes.post('/transactions',TransactionController.create)
routes.get('/transactions', TransactionController.findAll)
routes.delete('/transactions/:id', TransactionController.destroy)

/* Credit cards */
routes.post('/credit-cards',CredtiCardController.create)
routes.get('/credit-cards',CredtiCardController.findAll)
routes.delete('/credit-cards/:id',CredtiCardController.destroy)

export {routes}