const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: false,
  },
});

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  categoryId: {
      type: Number,
      required: true,
  }
  
});

const userSchema = new Schema({
  Username: {type: String, required: true},
  Password: {type: String, required: true},
  Email: {type: String, required: true},
});

userSchema.statics.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};


userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.Password);
};




module.exports = mongoose.model("Category", categorySchema);

module.exports = mongoose.model("Product", productSchema);

module.exports = mongoose.model("user", userSchema);
