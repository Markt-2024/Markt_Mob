import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './AdminProductCard.css';



const AdminProductCard = memo(({ id, image, name, price, onApprove, onReject }) => {

    const handleApprove = useCallback(async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        try {
            console.log("Approving product with id:", id); 
            const response = await fetch(`https://markt-mob.vercel.app/admin/approve`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            console.log(data.message);
            if (onApprove) onApprove(id);
        } catch (error) {
            console.error('Error approving product:', error);
            // Handle error, e.g., show an error message to the user
        }
    }, [id, onApprove]);
    
    const handleReject = useCallback(async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        try {
            const response = await fetch(`https://markt-mob.vercel.app/admin/reject`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            console.log(data.message);
            if (onReject) onReject(id);
        } catch (error) {
            console.error('Error rejecting product:', error);
            // Handle error
        }
    }, [id, onReject]);

    return (
        <div className="product-card">
            <Link to={`/product/${id}`} className="product-card-link">
                <img src={image} alt={name} className="product-image" />
                <div className="product-info">
                    <h3 className="product-name">{name}</h3>
                    <p className="product-price">₹{price}</p>
                </div>
            </Link>
            <div className='buttons'>
                <button className='approve' onClick={handleApprove}>
                    Approve
                </button>
                <button className='reject' onClick={handleReject}>
                    Reject
                </button>
            </div>
        </div>
    );
});

export default AdminProductCard;