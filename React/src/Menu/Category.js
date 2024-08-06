import React, { useState } from 'react';
import { Card, Button, CardBody, CardTitle } from 'react-bootstrap';
import AddCategory from '../Category/AddCategory';
import DeleteCategory from '../Category/DeleteCategory';
import EditCategory from '../Category/EditCategory';

const Category = ({ onBackToMenu }) => {

  const [addCategory, setAddCategory] =useState(false);
  const [deleteCategory, setDeleteCategory] = useState(false);
  const [editCategory, setEditCategory] = useState(false);

  const handleAddCategory = () => {
    setAddCategory(true);
  };
  const handleAddCategoryBack = () => {
    setAddCategory(false);
  };
  if(addCategory){
    return <AddCategory onBackToMenu={handleAddCategoryBack} />;
  };

  const handleDeleteCategory = () =>{
    setDeleteCategory(true)
  };
  const handleDeleteCategoryBack = () =>{
    setDeleteCategory(false)
  };
  if(deleteCategory){
    return <DeleteCategory onBackToMenu={handleDeleteCategoryBack} />
  };

  const handleEditCategory = () => {
    setEditCategory(true)
  };
  const handleEditCategoryBack = () => {
    setEditCategory(false)
  };
  if(editCategory){
    return <EditCategory onBackToMenu={handleEditCategoryBack} />
  }


  return (
    <Card className="mb-3">
      <CardBody>      
        <CardTitle>Category Menu</CardTitle>
        <div className='button-Menu'>
        <Button onClick={handleAddCategory}>
          Add Category
        </Button>
        <Button onClick={handleEditCategory}>
            Update Category
          </Button>
        </div>
        <div className='button-Menu'>
          <Button  onClick={handleDeleteCategory}>
            Delete Category
          </Button>
          <Button variant="primary" onClick={onBackToMenu}>
          Back To Main Menu
        </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Category;
