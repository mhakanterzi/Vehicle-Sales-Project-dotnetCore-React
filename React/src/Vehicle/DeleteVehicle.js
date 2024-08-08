import axios from "axios";
import React, {useEffect, useState} from "react";
import { Button,Card, CardBody, CardTitle } from "react-bootstrap";

const DeleteVehicle = ({onBackToMenu}) =>{
    const[vehicles, setVehicle] =useState([]);

    useEffect( () =>{
        const fetchVehicles = async ()=>{
            const response = await axios.get('https://localhost:7284/api/Vehicle')
            setVehicle(response.data);
        };
        fetchVehicles();
    }, [])

    const handleDeleteVehicle = async (vehicleToDelete) =>{
        await axios.delete(`https://localhost:7284/api/Vehicle/${vehicleToDelete.plate}`);

        const selectedVehicle = vehicles.filter(vehicle => vehicle.plate !== vehicleToDelete.plate);
        setVehicle(selectedVehicle);
    }

    return(
        <Card>
            <CardBody>
                <CardTitle>Delete Vehicle</CardTitle>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom : '20px'}}>
                    <div style={{ flex: 1, textAlign: 'center' }}> Brand</div>
                    <div  style={{ flex: 1, textAlign: 'center' }}>Model</div>
                    <div  style={{ flex: 1, textAlign: 'center' }}>Year</div>
                    <div  style={{ flex: 1, textAlign: 'center' }}>Plate</div>
                    <div  style={{ flex: 1, textAlign: 'center' }}> </div>
                </div>
                <ul style={{listStyleType: 'none', padding :0}}>
                {vehicles.map((vehicle, index) => (
                    <li key={index}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.brand}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.model}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.year}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.plate}</div>
                            <Button variant='danger' onClick={() => handleDeleteVehicle(vehicle)}>
                                Delete
                            </Button>
                        </div>
                    </li>
                    ))}
                </ul>
                <Button style={{display: 'flex' ,height:'60px', width:'160px', marginLeft:'100px' }} onClick={onBackToMenu}>
                    Back To Vehicle Menu
                </Button>
            </CardBody>
        </Card>
    )
}

export default DeleteVehicle;