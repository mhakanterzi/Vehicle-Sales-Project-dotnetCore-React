import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import Register from './Register'; 
import axios from 'axios';


const Login = ({ setIsLoggedIn, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  
    axios.get('https://localhost:7284/api/Customer')
      .then((response) => {
        const user = response.data.find(user => user.email === email && user.password === password);
        if (user) {
          setUser(user.firstName); 
          setIsLoggedIn(true);
        } else {
          alert('Invalid email or password');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <div className="button-container">
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Button 
              variant="primary" 
              onClick={() => setShowRegister(true)}
              style={{ marginLeft: '10px' }} 
            >
              Register
            </Button>
          </div>
        </Form>
        {showRegister && <Register setShowRegister={setShowRegister} />}
      </Card.Body>
    </Card>
  );
};

export default Login;
