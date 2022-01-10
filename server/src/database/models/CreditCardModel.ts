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
    type:DataTypes.STRING,
    allowNull:false
  },
  cvc: {
    type: DataTypes.STRING(3),
    allowNull:false
  },
  name: {
    type: DataTypes.STRING,
    allowNull:false
  },
  expiry: {
    type:DataTypes.STRING,
    allowNull:false
  } 
})