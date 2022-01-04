import { Request, Response } from "express";
import { TransactionModel } from '../database/models/TransactionModel'
import { db } from "../database/db";

class TransactionController {
  async findAll( req:Request, res:Response ) {
    const transactions = await TransactionModel.findAll()
    res.status(200).json(transactions)
  }
  async create(req:Request, res:Response ) {
    try {
      const { title, category, date, value, isOutput} = req.body

      const transaction = await TransactionModel.create({
        title,
        value,
        category,
        isOutput,
        date,
        
      })
      res.status(201).json(transaction)
    }catch(err){
      console.log(err) 
    }
    
  }
}
export default new TransactionController()