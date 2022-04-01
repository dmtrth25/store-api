const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
   const search = 'qq' // doesn't a matter. it especially for testing
   const products = await Product.find({
      name: { $regex: search, $options: 'i'}
   })
   res.status(200).json({products, length: products.length})
}

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
      queryObj.name = { $regex: name, $options: 'i'}
   }

   console.log(queryObj)
   const products = await Product.find(queryObj)
   res.status(200).json({products, length: products.length})
}


module.exports = {
   getAllProducts,
   getAllProductsStatic
}