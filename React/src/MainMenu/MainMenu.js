import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Category from '../Menu/Category';
import Vehicle from '../Menu/Vehicles'
import Listing from '../Menu/Listing'

const MainMenu = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showVehicle, setShowVehicle] = useState(false);
  const [showListing, setShowListing] = useState(false)


  const handleCategory = () => {
    setShowCategory(true);
  };
  const handleBackToMenu = () => {
    setShowCategory(false);
  };
  if (showCategory) {
    return <Category onBackToMenu={handleBackToMenu} />;
  }

  const handleVehicle = () => {
    setShowVehicle(true);
  };
  const handleVehicleBack = () => {
    setShowVehicle(false);
  };
  if(showVehicle){
    return <Vehicle onBackToMenu={handleVehicleBack} />;
  };


  const handleListing =() =>{
    setShowListing(true)
  }
  const handleListingBack=()=>{
    setShowListing(false)
  }
  if(showListing){
    return <Listing onBackToMenu={handleListingBack} />
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Main Menu</Card.Title>
        <div className="button-Menu">
          <Button variant="primary" onClick={handleCategory} className="mb-2">
            Category
          </Button>
          <Button variant="primary" onClick={handleVehicle}  className="mb-2">
            Vehlice
          </Button>
        </div>
        <div className="button-Menu">
          <Button variant="primary" onClick={handleListing} className="mb-2">
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
