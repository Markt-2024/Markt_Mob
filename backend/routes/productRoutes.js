const express = require("express");
const router = express.Router();
const Product = require('../models/productModel.js'); 

router.post('/post', async (req, res) => {
  try {
    const { title, image, description, price, contact } = req.body;

    if (!title || !image || !description || !price || !contact) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    const existingProduct = await Product.findOne({ image, title });
    if (existingProduct) {
      return res.status(400).json({ msg: 'Product already exists' });
    }

    const newProduct = new Product({ title, image, description, price, contact });
    await newProduct.save();

    res.json({ message: 'Product listed successfully', product: newProduct });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/all', async (req, res) => {
  try {
    console.log('Fetching all products...');
    const products = await Product.find({approved: true});
    console.log('Products retrieved:', products);
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;