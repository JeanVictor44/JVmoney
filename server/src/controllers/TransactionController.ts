import { Request, Response } from "express";
import { TransactionModel } from '../database/models/TransactionModel'
import { db } from "../database/db";

class TransactionController {
  async findAll( req:Request, res:Response ) {
    res.send('Find All')
  }
  async create(req:Request, res:Response ) {
    try {
      const { title, category, date, value } = req.body

      const transaction = await TransactionModel.create({
        title,
        value,
        category,
        date,
        
      })
      res.status(201).json(transaction)
    }catch(err){
      console.log(err)
    }
    
  }
}
export default new TransactionController()