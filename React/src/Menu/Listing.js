import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';
import AllVehicles from '../Listing/AllVehicles';
import OnSaleVehicle from '../Listing/OnSaleVehicle';
import SaledVehicle from '../Listing/SaledVehicle'

const Listing = ({onBackToMenu}) =>{
    const[allVehicle, setAllVehicle]= useState(false);
    const[onSaleVehicles, setOnSaleVehicles]= useState(false);
    const[saledVehicle, setSaledVehicle]=useState(false);

    const handleAllVehicle = () =>{
        setAllVehicle(true);
    }
    const handleAllVehicleBack = () => {
        setAllVehicle(false);
    }
    if (allVehicle){
        return <AllVehicles onBackToMenu={handleAllVehicleBack}  />
    }

    const handleOnSaleVehicle= () => {
        setOnSaleVehicles(true);
    }
    const handleOnSaleVehicleBack = () => {
        setOnSaleVehicles(false);
    }
    if(onSaleVehicles){
        return <OnSaleVehicle onBackToMenu={handleOnSaleVehicleBack}/>
    }


    const handleSaledVehicle =()=>{
        setSaledVehicle(true)
    }
    const handleSaledVehicleBack =() =>{
        setSaledVehicle(false)
    }
    if(saledVehicle){
        return <SaledVehicle  onBackToMenu={handleSaledVehicleBack}/>
    }

return(
    <Card>
        <CardBody>
            <CardTitle>Listing Menu</CardTitle>
            <div className='button-Menu'>
                <Button onClick={handleOnSaleVehicle}>
                    On Sale Vehicles
                </Button>
                <Button onClick={handleSaledVehicle}>
                    Saled Vehicles
                </Button>
            </div>
            <div className='button-Menu'>
                <Button onClick={handleAllVehicle}>
                    All Vehicles
                </Button>
                <Button  variant='primary' onClick={onBackToMenu} >
             Back To Main Menu
            </Button>
            </div>
        </CardBody>
    </Card>
)
}

export default Listing;