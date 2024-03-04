require('dotenv').config()

const connectDB = require('./db/connect')
const product = require('./models/product')
const project = require('./models/projectinfo')
const user = require('./models/user')
const cart = require('./models/cart')
const jsonProducts = require('./products.json')
const jsonProjects = require('./projects.json')

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        await cart.deleteMany()
        await user.deleteMany()
        // await product.deleteMany()
        // await product.create(jsonProducts)
        await project.deleteMany()
        await project.create(jsonProjects)
        console.log('success!!')
        process.exit(1)

    } catch (error) {
        console.log(error)
    }
}
start()