const getAllProducts = async (req, res) => {
   res.status(200).json({msg: 'All right'})
}

const getAllProductsStatic = async (req, res) => {
   res.status(404).json({msg: 'Static'})
}

module.exports = {
   getAllProducts,
   getAllProductsStatic
}