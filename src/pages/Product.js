// src/components/AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Paper, Typography, } from '@mui/material';

const AddProduct = () => {
    const [image, setImage] = useState(null)
    const [product, setProduct] = useState({
        name: '',
        description: '',
        old_price: '',
        new_price: '',
        quantity: '',
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('old_price', product.old_price);
        formData.append('new_price', product.new_price);
        formData.append('quantity', product.quantity);
        formData.append('image', image);
        try {
            const response = await axios.post('http://192.168.0.41:5000/api/products/add', product);
            console.log('Product added:', response.data);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper style={{ padding: 20, marginTop: 50 }}>
                <Typography variant="h5">Add New Product</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        name="old_price"
                        value={product.old_price}
                        onChange={handleChange}
                        margin="normal"
                        id="outlined-number"
                        label="old price"
                        type="number"
                    />
                    <TextField
                        fullWidth
                        name="new_price"
                        value={product.new_price}
                        onChange={handleChange}
                        margin="normal"
                        id="outlined-number"
                        label="new price"
                        type="number"
                    />
                    <TextField
                        fullWidth
                        name="quantity"
                        value={product.quantity}
                        onChange={handleChange}
                        margin="normal"
                        id="outlined-number"
                        label="quantity"
                        type="number"
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ marginTop: 20 }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={{ marginTop: 20 }}
                    >
                        Add Product
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default AddProduct;
