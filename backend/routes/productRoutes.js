const express = require("express");
const router = express.Router();
const Product = require('../models/productModel.js'); 

router.post('/post', async (req, res) => {
  try {
    const { title, image, description, price, contact , userId } = req.body;

    if (!title || !image || !description || !price || !contact) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    const existingProduct = await Product.findOne({ image, title });
    if (existingProduct) {
      return res.status(400).json({ msg: 'Product already exists' });
    }

    const newProduct = new Product({ title, image, description, price, contact , userId });
    await newProduct.save();

    res.json({ message: 'Product listed successfully', product: newProduct });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/all', async (req, res) => {
  try {
    console.log('Fetching all approved and available products...');
    const products = await Product.find({ approved: true , isSold: false });
    console.log('Products retrieved:', products);
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});


router.get('/my-posts', async (req, res) => {
  try {
    const userId = req.query.userId;
    const products = await Product.find({ userId });
    res.json({ success: true, products });
  } catch (err) {
    console.error('Error fetching user products:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
}
);

router.patch('/mark-as-sold/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    
    const product = await Product.findById(productId);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    product.isSold = true;
    await product.save();
    
    res.json({ message: 'Product marked as sold', product });
  } catch (error) {
    console.error('Error marking product as sold:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});




module.exports = router;