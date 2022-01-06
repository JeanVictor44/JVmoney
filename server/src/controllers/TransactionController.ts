import { Request, Response } from "express";
import { TransactionModel } from '../database/models/TransactionModel'

class TransactionController {
  
  async findAll( req:Request, res:Response ) {
    const transactions = await TransactionModel.findAll()
    res.status(200).json(transactions)
  }

  async create(req:Request, res:Response ) {
    try {
      const { title, category, amount, type} = req.body

      const transaction = await TransactionModel.create({
        title,
        amount,
        category,
        type
        
      })
      res.status(201).json(transaction)
    }catch(err){
      console.log(err) 
    }
    
  }

  async destroy(req: Request, res:Response) {
    const id = req.params.id
    const transacionDestroyed = await TransactionModel.destroy({
      where:{
        id:id
      }
    })
    res.status(204).json(transacionDestroyed)

  }
  
}
export default new TransactionController()