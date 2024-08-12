import React, { useState } from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";
import Register from "../UserAuth/Register";

const AddCustomer = ({onBackToMenu}) =>{
    const[showRegister, setShowRegister]= useState(false);

    return(
        <Card>
            <CardBody>
                <CardTitle>Add Customer</CardTitle>
                <div className="button-Menu">
                <Button onClick={() => setShowRegister(true)}>
                    Add Customer
                </Button>
                <Button onClick={onBackToMenu}>
                    Back To Customer Menu
                </Button>
                </div>
                {showRegister && <Register setShowRegister={setShowRegister} />}
            </CardBody>
        </Card>
    )
}

export default AddCustomer;