import React, { useState, useEffect } from "react";
import { Form, Button, Card, CardTitle, CardBody, FormControl, FormLabel, FormGroup } from 'react-bootstrap';
import axios from 'axios';

const AddVehicle = ({ onBackToMenu }) => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [plate, setPlate] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://localhost:7284/api/Category');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const handleAddVehicle = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://localhost:7284/api/Vehicle', {
                categoryName: selectedCategory,
                brand,
                model,
                year,
                plate
            });
            alert('Vehicle Added Successfully');
            setBrand('');
            setModel('');
            setYear('');
            setPlate('');
            setSelectedCategory('');
        } catch (error) {
            console.error('Error adding vehicle:', error);
            alert('Error adding vehicle');
        }
    };

    return (
        <Card>
            <CardBody>
                <CardTitle>Add Vehicle</CardTitle>
                <Form onSubmit={handleAddVehicle}>
                    <FormGroup controlId="forCategory">
                        <FormLabel>Select Category</FormLabel>
                        <FormControl as="select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} required>
                            <option value="">Select a category</option>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat.categoryName}>{cat.categoryName}</option>
                            ))}
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="forBrand">
                        <FormLabel>Brand</FormLabel>
                        <FormControl type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required />
                    </FormGroup>
                    <FormGroup controlId="forModel">
                        <FormLabel>Model</FormLabel>
                        <FormControl type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
                    </FormGroup>
                    <FormGroup controlId="forYear">
                        <FormLabel>Year</FormLabel>
                        <FormControl type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
                    </FormGroup>
                    <FormGroup controlId="forPlate">
                        <FormLabel>Plate</FormLabel>
                        <FormControl type="text" value={plate} onChange={(e) => setPlate(e.target.value)} required />
                    </FormGroup>
                    <div className="button-Menu" style={{ marginTop: '20px' }}>
                        <Button type="submit">Add Vehicle</Button>
                        <Button variant="primary" onClick={onBackToMenu} style={{ marginLeft: '8px' }}>
                            Back To Vehicle Menu
                        </Button>
                    </div>
                </Form>
            </CardBody>
        </Card>
    );
};

export default AddVehicle;
