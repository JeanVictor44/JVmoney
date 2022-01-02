import express from 'express'
import { db } from './database/db'
import { routes } from './routes'
const app = express()


app.use(express.json())
app.use(routes)

app.listen(3333,async() => {
  await db.sync()
  console.log(`Conectado com sucesso`)
})