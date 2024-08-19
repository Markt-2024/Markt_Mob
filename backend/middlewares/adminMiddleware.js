const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const adminMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
        console.log("decode : " , decoded);

        const adminId = process.env.ADMIN_ID;
        
        if (decoded.userId !== adminId) {
            return res.status(403).json({ message: 'Access denied: User not authorized' });
        }

        req.user = decoded;
        next();
    } catch (err) {
        console.error('Admin middleware error:', err);
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = adminMiddleware;
