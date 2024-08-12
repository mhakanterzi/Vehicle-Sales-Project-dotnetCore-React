import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';
import AddCustomer from '../Customer/AddCustomer';
import EditCustomer from '../Customer/EditCustomer';
import DeleteCustomer from '../Customer/DeleteCustomer';
import ChangePassword from '../Customer/ChangePassword';

const Customer = ({onBackToMenu}) => {
    const[addCustomer,setAddCustomer]=useState(false)
    const[editCustomer,setEditCustomer]=useState(false)
    const[deleteCustomer,setDeleteCustomer]=useState(false)
    const [changePassword, setChangePassword]=useState(false)

    const handleAddCustomer=() =>{
        setAddCustomer(true);
    }
    const handleAddCustomerBack=()=> {
        setAddCustomer(false);
    }
    if(addCustomer){
        return <AddCustomer onBackToMenu={handleAddCustomerBack} />
    }

    const handleEditCustomer =() =>{
        setEditCustomer(true);
    }
    const handleEditCustomerBack =() =>{
        setEditCustomer(false);
    }
    if(editCustomer){
       return <EditCustomer onBackToMenu={handleEditCustomerBack} />
    }

    const handleDeleteCustomer =()=> {
        setDeleteCustomer(true)
    }
    const handleDeleteCustomerBack= () => {
        setDeleteCustomer(false);
    }
    if(deleteCustomer){
        return <DeleteCustomer onBackToMenu={handleDeleteCustomerBack} />
    }


    const handleChangePassword =() => {
        setChangePassword(true)
    }
    const handleChangePasswordBack=()=> {
        setChangePassword(false)
    }
    if(changePassword){
        return <ChangePassword onBackToMenu={handleChangePasswordBack} />
    }


return(
    <Card className='mb3'>
        <CardBody>
            <CardTitle>Customer Menu</CardTitle>
            <div className='button-Menu'>
            <Button onClick={handleAddCustomer}>
                Add Customer
            </Button>
            <Button onClick={handleEditCustomer}>
                Edit Customer
            </Button>
            </div>
            <div className='button-Menu'>
            <Button onClick={handleDeleteCustomer}>
                Delete Customer
            </Button>
            <Button onClick={handleChangePassword}>
                Change Password
            </Button>
            </div>
            <Button variant='primary' onClick={onBackToMenu} style={{display: 'flex' ,height:'60px', width:'160px', marginLeft:'95px' }} >
                Back To Main Menu
            </Button>
        </CardBody>
    </Card>
)

}

export default Customer;