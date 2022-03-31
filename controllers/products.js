const Product = require('../models/product')

const getAllProducts = async (req, res) => {
   const {featured, company, name} = req.query
   const queryObj = {}

   if(featured) {
      queryObj.featured = featured === 'true' ? true : false
   }

   if(company) {
      queryObj.company = company
   }

   if(name) {
      queryObj.name = name
   }

   console.log(queryObj)
   const products = await Product.find(queryObj)
   res.status(200).json({products, length: products.length})
}

const getAllProductsStatic = async (req, res) => {
   const products = await Product.find({
      name: 'albany tablef'
   })
   res.status(200).json({products, length: products.length})
}

module.exports = {
   getAllProducts,
   getAllProductsStatic
}