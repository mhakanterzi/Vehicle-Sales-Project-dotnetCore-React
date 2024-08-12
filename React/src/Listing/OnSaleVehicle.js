import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";
import axios from "axios";

const OnSaleVehicle = ({ onBackToMenu }) => {
    const [onSale, setOnSale] = useState([]);
    const [vehicleInfo, setVehicleInfo] = useState([]);



    useEffect(() => {
        const fetchVehicles = async () => {
                const response = await axios.get('https://localhost:7284/api/VehicleSaleInfo');
                const responseVehicle = await axios.get('https://localhost:7284/api/Vehicle')

                const AllData = response.data.map(saleInfo => {
                    const vehicleData = responseVehicle.data.find(v => v.plate === saleInfo.plate);
                    return { ...saleInfo, ...vehicleData };
                });
        
                const filteredVehicles = AllData.filter(vehicle => vehicle.onSale);
                setOnSale(filteredVehicles);
            };
            fetchVehicles();
        }, []);

    const handleDeleteVehicle = async (vehicleToDelete) => {
            await axios.delete(`https://localhost:7284/api/VehicleSaleInfo/plate?plate=${vehicleToDelete.plate}`);
            setOnSale(onSale.filter(vehicle => vehicle.plate !== vehicleToDelete.plate));

    };

    const addOnSaled = async (vehicle, price) => {
            const vehicleWithPrice = { ...vehicle,vehicleInfo , price, onSale: false };

            await axios.put(`https://localhost:7284/api/VehicleSaleInfo/plate?plate=${vehicle.plate}`, vehicleWithPrice);

            setOnSale(onSale.filter(v => v.plate !== vehicle.plate));

    };

    return(
        <Card style={{ width: '90%', maxWidth: '70%', margin: 'auto', padding: '20px', marginTop: '20px' }}>
            <CardBody>
                <CardTitle>On Sale Vehicles</CardTitle>
                <div style={{display:'flex', justifyContent :'space-between', marginBottom:'10px'}}>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Category</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Brand</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Model</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Year</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Plate</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Price</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Saled</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Remove</div>
                </div>
                <ul style={{listStyleType: 'none', padding :0}}>
                {onSale.map((vehicle, index) => (
                    <li key={index}>    
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.categoryName}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.brand}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.model}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.year}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.plate}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.price}</div>
                            <Button variant='link' style={{ color: 'green'}} onClick={() => addOnSaled(vehicle, vehicle.price)}>
                                Saled
                            </Button>
                            <Button  variant='danger' onClick={() => handleDeleteVehicle(vehicle)}>
                                Remove
                            </Button>
                        </div>
                    </li>
                    ))}
                </ul>
                <Button onClick={onBackToMenu} style={{display: 'flex' ,height:'60px', width:'160px', marginLeft:'340px' }}>
                    Back To Listing Menu
                </Button>
            </CardBody>
        </Card>
    )
}

export default OnSaleVehicle;