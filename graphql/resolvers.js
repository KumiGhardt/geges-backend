const Product = require("./model/models");
const Category = require("./model/models");


module.exports = {
  products: async () => {
    try {
      const productsFetched = await Product.find()
      return productsFetched.map(product => {
        return {
          ...product._doc,
          image: product.image,
          _id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          category: product.categoryId
        }
      })
    } catch (error) {
      throw error
    }
  },

  createProduct: async args => {
    try {
      const { name, description, price, categoryID } = args.product
      const product = new Product({
        name, 
        description, 
        price, 
        categoryID
      })

      const newProduct = await product.save()
      return { ...newProduct._doc, _id: newProduct.id,
        name: newProduct.name,
        description: newProduct.description,
        price: newProduct.price,
        category: newProduct.categoryId }
    } catch (error) {
      throw error
    }
  },


  categories: async () => {
    try {
        const categoriesFetched = await Category.find()
      return categoriesFetched.map(category => {
        return {
          ...category._doc,
          image: category.image,
          _id: category.id,
          name: category.name,
          description: category.description,
          price: category.price,
          category: category.categoryId
        }
      })
    } catch (error) {
      throw error
    }
  },

  createCategory: async args => {
    try {
      const { name, categoryID } = args.product
      const category = new Category({
        name, 
        categoryID
      })

      const newCategory = await category.save()
      return { ...newCategory._doc,
        name: newCategory.name,
        categoryId: newCategory.id }
    }catch (error) {
      throw error
    }
  },

  
}