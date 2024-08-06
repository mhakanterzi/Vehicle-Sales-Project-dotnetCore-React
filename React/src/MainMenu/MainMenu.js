import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Category from '../Menu/Category';

const MainMenu = () => {
  const [showCategory, setShowCategory] = useState(false);

  const handleCategory = () => {
    setShowCategory(true);
  };
  const handleBackToMenu = () => {
    setShowCategory(false);
  };
  if (showCategory) {
    return <Category onBackToMenu={handleBackToMenu} />;
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Main Menu</Card.Title>
        <div className="button-Menu">
          <Button variant="primary" onClick={handleCategory} className="mb-2">
            Category
          </Button>
          <Button variant="primary"  className="mb-2">
            Vehlice
          </Button>
        </div>
        <div className="button-Menu">
          <Button variant="primary"  className="mb-2">
            listing
          </Button>
          <Button variant="primary"  className="mb-2">
            Customer
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MainMenu;
