"use client"
import React, { useState } from 'react';
import '../style.css';
function Frm(){
    const [formData, setFormData] = useState({
        userId: '',
        productName: '',
        price: '',
        status: 'pending'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        console.log('Form Output:', formData);
    };

    return (
    <>
        <h2 className='bi'>Order Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>User ID: </label>
                <input 
                    type="number" 
                    name="userId" 
                    value={formData.userId} 
                    onChange={handleInputChange}
                    placeholder="Enter User ID"
                />
            </div>
            <br />
            <div>
                <label>Product Name: </label>
                <input 
                    type="text" 
                    name="productName" 
                    value={formData.productName} 
                    onChange={handleInputChange}
                    placeholder="Enter Product Name"
                />
            </div>
            <br />
            <div>
                <label>Price: </label>
                <input 
                    type="number" 
                    name="price" 
                    value={formData.price} 
                    onChange={handleInputChange}
                    placeholder="Enter Price"
                />
            </div>
            <br />
            <div>
                <label>Status: </label>
                <select name="status" value={formData.status} onChange={handleInputChange}>
                    <option value="pending">Pending</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="returned">Returned</option>
                </select>
            </div>
            <br />
            <button type="submit">Submit Order</button>
        </form>
    </>
    )
}

export default Frm;
