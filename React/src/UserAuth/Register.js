import React, { useState } from 'react';
import { Form, Button, Card, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import axios from 'axios';

const Register = ({ setShowRegister }) => {
  const [firstName, setName] = useState('')
  const[lastName, setSurname]= useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[phone, setPhone]= useState('')

  const handleRegister = (e) => {
    e.preventDefault();
  
    const newUser = { firstName, lastName, email, password, phone };
  
    axios.post('https://localhost:7284/api/Customer', newUser)
    .then((response) => {
      alert('Registration successful');
      setShowRegister(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      if (error.response) {
        console.error('Server responded with:', error.response.data);
        alert(`Registration failed: ${error.response.data.message || error.response.data}`);
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('Registration failed: No response from server.');
      } else {
        console.error('Error setting up request:', error.message);
        alert('Registration failed: Error setting up request.');
      }
    });
  };
  

  return (

    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Register</Card.Title>
        <Form onSubmit={handleRegister}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <FormGroup>
            <FormLabel>Surname</FormLabel>
            <FormControl 
            type='text'
            value={lastName}
            onChange={(e) => setSurname(e.target.value)}
            required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Phone</FormLabel>
            <FormControl 
            type='number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            />
          </FormGroup>
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
              Register
            </Button>
            <Button variant="secondary" onClick={() => setShowRegister(false)}>
              Cancel
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Register;
  