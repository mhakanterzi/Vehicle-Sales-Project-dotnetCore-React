import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';
import AddVehicle from '../Vehicle/AddVehicle';
import UpdateVehicle from '../Vehicle/UpdateVehicle';
import DeleteVehicle from '../Vehicle/DeleteVehicle';

const Vehicle = ({onBackToMenu}) =>{
    const[addVheicle, setAddVehicle] = useState(false);
    const[updateVehicle, setUpdateVehicle]= useState(false);
    const[deleteVehicle, setDeleteVehicle] = useState(false);

    const handleAddVehcile = () =>{
        setAddVehicle(true);
    }
    const handleAddVehicleBack = () =>{
        setAddVehicle(false);
    }
    if(addVheicle){
       return<AddVehicle onBackToMenu={handleAddVehicleBack} />
    }

    const handleUpdateVehicle = () =>{
        setUpdateVehicle(true)
    }
    const handleUpdateBack = () => {
        setUpdateVehicle(false)
    }
    if(updateVehicle){
        return <UpdateVehicle onBackToMenu={handleUpdateBack} />
    }

    const handleDeleteVehicle =() =>{
        setDeleteVehicle(true)
    }
    const handleDeleteVehicleBack =() =>{
        setDeleteVehicle(false)
    }
    if(deleteVehicle){
        return<DeleteVehicle onBackToMenu={handleDeleteVehicleBack}/>
    }


return(
    <Card className="mb-3">
         <CardBody>
            <CardTitle>Vehicle Menu</CardTitle>
            <div className='button-Menu'>
                <Button onClick={handleAddVehcile}>
                    Add Vehicle
                </Button>
                <Button onClick={handleUpdateVehicle}>
                    Update Vehicle
                </Button>
            </div>
            <div className='button-Menu'>
                <Button onClick={handleDeleteVehicle}>
                    Delete Vehicle
                </Button>
                <Button variant='primary' onClick={onBackToMenu} >
                    Go Back To Main Menu
                </Button>
            </div>
        </CardBody>
    </Card>
    )
}

export default Vehicle;