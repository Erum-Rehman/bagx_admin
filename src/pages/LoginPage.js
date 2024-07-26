import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Paper, Container, Typography } from '@mui/material';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })
  // const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
        ...loginData,
        [name]: value,
    });
};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('login')
    setLoginData({
      username: '',
      password: ''
    })
  };

  return (
    <Container maxWidth="xs">
      <Paper style={{ padding: 20, marginTop: 50 }}>
        <Typography variant="h5">Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name='username'
            label="Username"
            margin="normal"
            value={loginData.username}
            onChange={handleChange} required
          />
          <TextField
            fullWidth
            type="password"
            name='password'
            label="Password"
            margin="normal"
            value={loginData.password}
            onChange={handleChange} required
          />
          <Button fullWidth variant="contained" color="primary" type="submit" style={{ marginTop: 20 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
