import { Router } from "express";
import TransactionController from "./controllers/TransactionController";
const routes = Router()

routes.post('/transactions',TransactionController.create)
// R
routes.get('/transactions', TransactionController.findAll)

export {routes}