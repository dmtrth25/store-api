const Product = require('../models/product')

const getAllProducts = async (req, res) => {
   const {featured} = req.query
   const queryObj = {}

   if(featured) {
      queryObj.featured = featured === 'true' ? true : false
   }

   console.log(queryObj)
   const products = await Product.find(queryObj)
   res.status(200).json({products, length: products.length})
}

const getAllProductsStatic = async (req, res) => {
   const {featured} = req.query
   const queryObj = {}

   if(featured) {
      queryObj.featured = featured === 'true' ? true : false
   }

   console.log(queryObj)
   const products = await Product.find(queryObj)
   res.status(200).json({products, length: products.length})
}

module.exports = {
   getAllProducts,
   getAllProductsStatic
}