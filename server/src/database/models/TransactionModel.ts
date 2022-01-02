import { db } from "../db"
import { DataTypes } from 'sequelize'

export const TransactionModel = db.define('transactions', {
  id: {
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  title: {
    type:DataTypes.STRING,
    allowNull:false,
  },
  value: {
    type:DataTypes.FLOAT,  
    allowNull:false
  },
  category: {
    type: DataTypes.STRING,
    allowNull:false
  },
  isOutput: {
    type:DataTypes.BOOLEAN,
    allowNull:false
  },
  date: {
    type: DataTypes.DATE,
    allowNull:false
  }
})