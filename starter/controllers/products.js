const Product = require('../models/product')


const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({}).count()
    res.status(200).json({ products })
}
const getAllProducts = async (req, res) => {
    const { category, name, sort, fields, numericFilters } = req.query
    const queryObject = {}



    if (category) {
        queryObject.category = category
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }

    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }
        const regEx = /\b(>|>=|=|<|<=)\b/g
        let filter = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)

        const options = ['price', 'ratings']
        filter = filter.split(',').forEach((element) => {
            const [field, operator, value] = element.split('-')
            if (options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) }
            }
        })
    }
    let result = Product.find(queryObject)
    let result2 = Product.find(queryObject)

    if (sort) {

        const sortlist = sort.split(',').join(' ')
        result = result.sort(sortlist)
        result2 = result2.sort(sortlist)



    }
    if (fields) {
        const fieldlist = fields.split(',').join(' ')
        result = result.select(fieldlist)
        result2 = result2.select(fieldlist)

    }
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 5
    const skip = (page - 1) * limit
    const count = await result2.find({}).countDocuments()
    result = result.skip(skip).limit(limit)


    console.log(queryObject)


    const products = await result
    res.status(200).json({
        products,
        nbHits: products.length,
        totalPage: Math.ceil(count / limit)

    })
}




module.exports = {
    getAllProducts, getAllProductsStatic,
}