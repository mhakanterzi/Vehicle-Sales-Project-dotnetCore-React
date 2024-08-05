import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const MainMenu = () => {


  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Main Menu</Card.Title>
        <div className="button-Menu">
          <Button variant="primary" className="mb-2">
            Category
          </Button>
          <Button variant="primary" className="mb-2">
            Vehlice
          </Button>
        </div>
        <div className="button-Menu">
          <Button variant="primary" className="mb-2">
            listing
          </Button>
          <Button variant="primary" className="mb-2">
            Customer
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MainMenu;
