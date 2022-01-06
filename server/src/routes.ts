import { Router } from "express";
import TransactionController from "./controllers/TransactionController";
const routes = Router()

routes.post('/transactions',TransactionController.create)
// R
routes.get('/transactions', TransactionController.findAll)

routes.delete('/transactions/:id', TransactionController.destroy)

export {routes}