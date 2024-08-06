import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardTitle, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import axios from 'axios';

const EditCategory = ({ onBackToMenu }) => {
    const [editCategories, setEditCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://localhost:7284/api/Category');
                setEditCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const handleEditCategory = async (e) => {
        e.preventDefault();
        try {
            const categoryToUpdate = editCategories.find(cat => cat.categoryName === selectedCategory);
            if (!categoryToUpdate) {
                alert('Selected category not found');
                return;
            }

            // Ensure to include the correct category name in the URL
            await axios.put(`https://localhost:7284/api/Category/${selectedCategory}`, {
                categoryName: newCategory,
                isActive: categoryToUpdate.isActive,
                isDeleted: categoryToUpdate.isDeleted
            });

            const updatedCategories = editCategories.map(cat =>
                cat.categoryName === selectedCategory ? { ...cat, categoryName: newCategory } : cat
            );
            setEditCategories(updatedCategories);
            setSelectedCategory('');
            setNewCategory('');
            alert('Category updated');
        } catch (error) {
            console.error('Error updating category:', error);
            alert('Error updating category');
        }
    };

    const handleSelectedCategory = (category) => {
        setSelectedCategory(category.categoryName);
        setNewCategory(category.categoryName);
    };

    return (
        <Card>
            <CardBody>
                <CardTitle>Edit Category</CardTitle>

                <Form onSubmit={handleEditCategory}>
                    <FormGroup>
                        <FormLabel>Select Category to Edit</FormLabel>
                        <ul>
                            {editCategories.map((cat, index) => (
                                <li key={index}>
                                    {cat.categoryName}
                                    <Button variant='link' onClick={() => handleSelectedCategory(cat)}>
                                        Update
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Edit Category Name</FormLabel>
                        <FormControl
                            type='text'
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                        />
                    </FormGroup>

                    <div className='button-Menu' style={{ marginLeft: '8px', marginTop: '20px' }}>
                        <Button type='submit' variant='primary'>
                            Update Category
                        </Button>
                        <Button onClick={onBackToMenu}>
                            Back To Category Menu
                        </Button>
                    </div>
                </Form>
            </CardBody>
        </Card>
    );
};

export default EditCategory;
