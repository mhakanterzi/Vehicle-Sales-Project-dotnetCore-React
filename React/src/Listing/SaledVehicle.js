import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";
import axios from "axios";

const SaledVehicle = ({ onBackToMenu }) => {
    const [onSaled, setOnSaled] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
                const response = await axios.get('https://localhost:7284/api/VehicleSaleInfo');
                const filteredVehicles = response.data.filter(vehicle => vehicle.onSale === false);
                setOnSaled(filteredVehicles);
        };
        
        fetchVehicles();
    }, []);

    const handleDeleteVehicle = async (vehicleToDelete) => {
        await axios.delete(`https://localhost:7284/api/VehicleSaleInfo/plate?plate=${vehicleToDelete.plate}`);
        const selectedVehicle = onSaled.filter(vehicle =>
            vehicle.plate !== vehicleToDelete.plate
        );
        setOnSaled(selectedVehicle);
    }

    return (
        <Card style={{ width: '90%', maxWidth: '70%', margin: 'auto', padding: '20px', marginTop: '20px' }}>
            <CardBody>
                <CardTitle>Sold Vehicles</CardTitle>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>Category</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>Brand</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>Model</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>Year</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>Plate</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>Price</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>Remove</div>
                </div>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {onSaled.map((vehicle, index) => (
                        <li key={index}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ flex: 1, textAlign: 'center' }}>{vehicle.category}</div>
                                <div style={{ flex: 1, textAlign: 'center' }}>{vehicle.brand}</div>
                                <div style={{ flex: 1, textAlign: 'center' }}>{vehicle.model}</div>
                                <div style={{ flex: 1, textAlign: 'center' }}>{vehicle.year}</div>
                                <div style={{ flex: 1, textAlign: 'center' }}>{vehicle.plate}</div>
                                <div style={{ flex: 1, textAlign: 'center' }}>{vehicle.price}</div>
                                <Button variant='danger' onClick={() => handleDeleteVehicle(vehicle)}>
                                    Remove
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
                <Button onClick={onBackToMenu} style={{ display: 'flex', height: '60px', width: '160px', marginLeft: '350px' }}>
                    Back To Listing Menu
                </Button>
            </CardBody>
        </Card>
    )
}

export default SaledVehicle;
