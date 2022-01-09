import { db } from "../db";
import { DataTypes } from "sequelize";

export const CreditCardModel = db.define('creditCards', {
  id: {
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull:false
  },
  number: {
    type:DataTypes.INTEGER,
    allowNull:false
  },
  cvc: {
    type: DataTypes.INTEGER({
      length:3,
      unsigned:true
    }),
    allowNull:false
  },
  name: {
    type: DataTypes.STRING,
    allowNull:false
  },
  expiry: {
    type:DataTypes.INTEGER,
    allowNull:false
  }
})