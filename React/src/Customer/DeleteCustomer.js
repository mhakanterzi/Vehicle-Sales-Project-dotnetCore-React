import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";
import axios from "axios";

const DeleteCustomer = ({ onBackToMenu }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await axios.get('https://localhost:7284/api/Customer'); 
                setUsers(response.data);
            } catch (error) {
                console.error("There was an error fetching the customer data!", error);
            }
        };
        fetchCustomer();
    }, []);

    const deleteCustomer = async (userToDelete) => {
        try {
            await axios.delete(`https://localhost:7284/api/Customer/${userToDelete.customerID}`); 
            const updatedUsers = users.filter(user =>
                user.customerID !== userToDelete.customerID
            );
            setUsers(updatedUsers);
        } catch (error) {
            console.error("There was an error deleting the customer!", error);
        }
    };

    return (
        <Card style={{ width: '90%', maxWidth: '50%', margin: 'auto', padding: '20px', marginTop: '20px' }}>
            <CardBody>
                <CardTitle>Delete Customer</CardTitle>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>Name</div>
                    <div style={{ flex: 1, textAlign: 'center' }}>Surname</div>
                    <div style={{ flex: 1, textAlign: 'center' }}>Phone</div>
                    <div style={{ flex: 1, textAlign: 'center' }}>Email</div>
                    <div style={{ flex: 1, textAlign: 'center' }}> </div>
                </div>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {users.map((user) => (
                        <li key={user.customerID}> {/* Assuming `customerID` is unique */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ flex: 1, textAlign: 'center' }}>{user.firstName}</div>
                                <div style={{ flex: 1, textAlign: 'center' }}>{user.lastName}</div>
                                <div style={{ flex: 1, textAlign: 'center' }}>{user.phone}</div>
                                <div style={{ flex: 1, textAlign: 'center' }}>{user.email}</div>
                                <Button variant='danger' onClick={() => deleteCustomer(user)}>
                                    Delete
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
                <Button onClick={onBackToMenu} style={{ display: 'flex', height: '60px', width: '160px', marginLeft: '210px' }}>
                    Back To Customer Menu
                </Button>
            </CardBody>
        </Card>
    );
};

export default DeleteCustomer;
