import React, {useEffect, useState} from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";
import AddPrice from './AddPrice';
import axios from "axios";

const AllVehicles = ({onBackToMenu}) =>{
    const[showVehicle, setShowVehicle] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState(null);


    useEffect( () =>{
        const fetchVehicles = async ()=>{
            const response = await axios.get('https://localhost:7284/api/Vehicle')
            setShowVehicle(response.data);
        };
        fetchVehicles();
    }, [])

    const addOnSale = async (vehicle, price) => {
        try {
            const updatedVehicle = {
                ...vehicle,
                price,
                onSale: true
            };
    
            await axios.post('https://localhost:7284/api/VehicleSaleInfo', updatedVehicle);
    
            alert('Vehicle added to sale');
            setSelectedVehicle(null);
        } catch (error) {
            console.error("Error updating vehicle sale status:", error);
            alert('Failed to add vehicle to sale');
        }
    };
    
    return(
        <Card style={{ width: '90%', maxWidth: '50%', margin: 'auto', padding: '20px', marginTop: '20px' }}>
            <CardBody>
                <CardTitle>All Vehicles</CardTitle>
                <div style={{display:'flex', justifyContent :'space-between', marginBottom:'10px'}}>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Category</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Brand</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Model</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Year</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Plate</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Case</div>
                </div>
                <ul style={{listStyleType: 'none', padding :0}}>
                {showVehicle.map((vehicle, index) => (
                    <li key={index}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.categoryName}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.brand}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.model}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.year}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.plate}</div>
                            <Button variant='link' style={{ color: 'green'}}  onClick={() => setSelectedVehicle(vehicle)}>
                                Sale
                            </Button>
                        </div>
                    </li>
                    ))}
                </ul>
                <Button  onClick={onBackToMenu} style={{display: 'flex' ,height:'60px', width:'160px', marginLeft:'220px' }}>
                    Back To Listing Menu
                </Button>
                {selectedVehicle && 
                    <AddPrice 
                        vehicle={selectedVehicle} 
                        onAddOnSale={addOnSale} 
                        onClose={() => setSelectedVehicle(null)} 
                    />
                }
            </CardBody>
        </Card>
    )
}

export default AllVehicles;