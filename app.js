require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const routerProducts = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//middlewares
app.use(express.json())

//routes
app.get('/', (req, res) => {
   res.send('<h1>Hello!</h1><a href="/api/v1/products">Products route</a>')
})

app.use('/api/v1/products', routerProducts)

//product routes

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3030

const start = async (req, res) => {
   try {
      await connectDB(process.env.MONGO_URL)
      app.listen(port, console.log(`Server was started on ${port}`))
   } catch (error) {
      console.log(error.message);
   }
}

start()