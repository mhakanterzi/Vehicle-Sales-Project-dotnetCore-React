import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const AddVehicleForm = ({ vehicle, onAddOnSale, onClose }) => {
    const [price, setPrice] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
            onAddOnSale(vehicle, parseFloat(price));      
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>Add Vehicle To Sale</Card.Title>
                <Form onSubmit={handleAdd}>
                    <Form.Group controlId="formPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add To Sale
                    </Button>
                    <Button 
                        variant="secondary" 
                        onClick={onClose} 
                        style={{ marginLeft: '10px' }}
                    >
                        Cancel
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddVehicleForm;
