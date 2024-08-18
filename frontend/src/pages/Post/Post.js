import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { message } from "antd";

import './Post.css';

function Post() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();

  async function registerUser(e) {
    e.preventDefault();
    const userId = localStorage.getItem('userId');

    if (!userId) {
      message.error('Please login before posting a product');
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:8083/product/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ title, image, description, price, contact, userId}),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      message.success(`Product listed successfully: ${data.product.title}`);
    } catch (error) {
      message.error(`There was a problem with the fetch operation: ${error.message}`);
    }
  }

  return (
    <div className="Post">
      <h1>Post</h1>
      <form onSubmit={registerUser}>
        <label>
          Title:
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            name="image"
          />
        </label>
        <br />
        <label>
          Description:
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
          />
        </label>
        <br />
        <label>
          Price:
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            name="price"
          />
        </label>
        <br />
        <label>
          Contact:
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            type="text"
            name="contact"
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <br />
      <a href="/">
        <button>Home</button>
      </a>
    </div>
  );
}

export default Post;