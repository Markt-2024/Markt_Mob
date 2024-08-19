const express = require("express");
const router = express.Router();
const Product = require('../models/productModel.js');
const adminMiddleware =  require('../middlewares/adminMiddleware.js');

router.post('/approve', async (req, res) => {
    try {
        const { id } = req.body;
        
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        if (product.approved) {
            return res.status(400).json({ message: 'Product is already approved' });
        }
        
        product.approved = true;
        await product.save();
        
        res.json({ message: 'Product approved successfully', product });
    } catch (err) {
        console.error('Error approving product:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.post('/reject', async (req, res) => {
    try {
        const { id } = req.body;
    
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await Product.findByIdAndDelete(id);

        res.json({ message: 'Product rejected and removed successfully' });
    } catch (err) {
        console.error('Error rejecting product:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.get('/all', adminMiddleware , async (req, res) => {
    try {
        console.log('Fetching all unapproved products...');
        const products = await Product.find({ approved: false });
        console.log(`Retrieved ${products.length} unapproved products`);
        res.json(products);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;