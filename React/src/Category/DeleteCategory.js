import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';
import axios from 'axios';

const DeleteCategory = ({ onBackToMenu }) => {
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

    const handleDeleteCategory = async (categoryToDelete) => {
        try {
            await axios.delete(`https://localhost:7284/api/Category/${categoryToDelete}`);
            const updatedCategories = showCategories.filter(cat => cat.categoryName !== categoryToDelete);
            setShowCategories(updatedCategories);
            alert('Category deleted');
        } catch (error) {
            console.error('Error deleting category:', error);
            alert('Error deleting category');
        }
    };

    return (
        <Card>
            <CardBody>
                <CardTitle>Delete Category</CardTitle>
                <ul>
                    {showCategories.map((cat, index) => (
                        <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {cat.categoryName}
                            <Button variant='danger' onClick={() => handleDeleteCategory(cat.categoryName)}>
                                Delete
                            </Button>
                        </li>
                    ))}
                </ul>
                <Button style={{ display: 'flex', height: '60px', width: '160px', marginLeft: '100px' }} onClick={onBackToMenu}>
                    Back To Category Menu
                </Button>
            </CardBody>
        </Card>
    );
};

export default DeleteCategory;
