import { CreditCardModel } from '../database/models/CreditCardModel'
import { Request, Response } from 'express'

class CreditCardController {
  
  async findAll(req: Request, res:Response) {
    const creditCards = await CreditCardModel.findAll() 
    return res.status(201).json(creditCards)
  }

  async create(req: Request, res: Response) {
    try {
      const { number, cvc, name, expiry } = req.body
      const creditCard = await CreditCardModel.create({
        number,
        cvc,
        name,
        expiry
      })
      return res.status(201).json(creditCard)
    }catch(err){
      throw new Error(err)
    }
    
  }
  async destroy(req: Request, res: Response) {
    const id = req.params.id
    const creditCardDestroyed = await CreditCardModel.destroy({
      where: {
        id
      }
    })
    return res.status(204).json(creditCardDestroyed)
  }
}
export default new CreditCardController()