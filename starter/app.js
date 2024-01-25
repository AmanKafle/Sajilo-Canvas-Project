require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()


const errorMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

//middleware
app.use(express.json())
app.use(errorMiddleware)
// app.use(notFoundMiddleware)

//routes

app.get('/', (req,res) =>{
    res.send('<h1>Store API</h1><a href ="/api/v1/products">products routes</a>')
})
app.use('/api/v1/products', productsRouter)

//products routes



const port = process.env.PORT || 3000

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen( port, console.log(`The server is listening on port 3000....`))
    } catch (error) {
        console.log(error)
        
    }
}
start()