const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
   const products = await Product.find({}).select('name price')
   res.status(200).json({products, length: products.length})
}

const getAllProducts = async (req, res) => {
   const {featured, company, name, sort, fields} = req.query
   const queryObj = {}

   if(featured) {
      queryObj.featured = featured === 'true' ? true : false
   }

   if(company) {
      queryObj.company = company
   }

   if(name) {
      queryObj.name = { $regex: name, $options: 'i'}
   }

   console.log(queryObj)
   let result = Product.find(queryObj)

   //sort
   if(sort) {
      const sortList = sort.split(',').join(' ')
      result = result.sort(sortList)
   } else {
      result = result.sort('createdAt')
   }

   //select
   if(fields) {
      const fieldsList = fields.split(',').join(' ')
      result = result.select(fieldsList)
   }
   const products = await result
   res.status(200).json({products, length: products.length})
}

module.exports = {
   getAllProducts,
   getAllProductsStatic
}