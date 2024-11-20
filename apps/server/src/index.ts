
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
const app = express()
import { productsRoute } from './routes/product.route'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (_, res) => {
  return res.json({ ok: true })
})
productsRoute(app);


const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`Server API running on http://localhost:${port}`)
})
