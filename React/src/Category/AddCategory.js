import React, { useEffect, useState } from 'react';
import { Form, Card, Button, CardBody, CardTitle, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import axios from 'axios';

const AddCategory = ({ onBackToMenu }) => {
    const [category, setCategory] = useState('');
    const [showCategories, setShowCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://localhost:7284/api/Category');
                setShowCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const handleAddCategory = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7284/api/Category', { categoryName: category, isActive: true, isDeleted: false });
            setShowCategories([...showCategories, response.data]);
            alert('Added Category');
            setCategory('');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert('Category already exists');
            } else {
                console.error('Error adding category:', error);
                alert('Error adding category');
            }
        }
    };

    return (
        <Card>
            <CardBody>
                <CardTitle>Stored Categories</CardTitle>
                <ul>
                    {showCategories.map((cat, index) => (
                        <li key={index}>{cat.categoryName}</li>
                    ))}
                </ul>
            </CardBody>

            <CardBody>
                <CardTitle>Add Category</CardTitle>
                <Form onSubmit={handleAddCategory}>
                    <FormGroup>
                        <FormLabel>Category</FormLabel>
                        <FormControl
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </FormGroup>
                    <div className='button-Menu' style={{ marginTop: '15px', marginLeft: '9px' }}>
                        <Button type='submit'>
                            Add Category
                        </Button>
                        <Button variant="primary" onClick={onBackToMenu}>
                            Back To Main Menu
                        </Button>
                    </div>
                </Form>
            </CardBody>
        </Card>
    );
};

export default AddCategory;
