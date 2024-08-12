import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardTitle, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import axios from "axios";

const EditCustomer = ({ onBackToMenu }) => {
    const [customerID, setCustomerID] = useState(null);
    const [newName, setNewName] = useState('');
    const [newSurname, setNewSurname] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [updateUsers, setUpdateUser] = useState([]);
    const [selectedEmail, setSelectedEmail] = useState('');

    useEffect(() => {
        const fetchCustomer = async () => {
            const getCustomer = await axios.get('https://localhost:7284/api/Customer'); 
            setUpdateUser(getCustomer.data);
        };
        fetchCustomer();
    }, []);

    const selectEmail = (e) => {
        const email = e.target.value;
        setSelectedEmail(email);

        const user = updateUsers.find(u => u.email === email);
        if (user) {
            setCustomerID(user.customerID); 
            setNewName(user.firstName);
            setNewSurname(user.lastName);
            setNewPhone(user.phone);
            setNewEmail(user.email);
            setNewPassword(user.password); 
        }
    }

    const handleUpdateUsers = async (e) => {
        e.preventDefault();

        const updatedUser = {
            customerID, 
            firstName: newName,
            lastName: newSurname,
            phone: newPhone,
            email: newEmail,
            password: newPassword 
        };

        try {
            const response = await axios.put(`https://localhost:7284/api/Customer/${customerID}`, updatedUser); 
            console.log("Update Response:", response);
            alert('User Updated Successfully');
        } catch (error) {
            console.error("There was an error updating the user!", error);
            alert('Failed to update user');
        }
    }

    return (
        <Card>
            <CardBody>
                <CardTitle>Edit Customer</CardTitle>
                <Form onSubmit={handleUpdateUsers}>
                    <FormGroup controlId="formSelectCustomer">
                        <FormLabel>Select Customer</FormLabel>
                        <FormControl as="select" value={selectedEmail} onChange={selectEmail} required>
                            <option value="">Select a customer</option>
                            {updateUsers.map((user, index) => (
                                <option key={index} value={user.email}>{user.email}</option>
                            ))}
                        </FormControl>
                    </FormGroup>

                    {selectedEmail && (
                        <>
                            <FormGroup controlId="formNewName">
                                <FormLabel>Name</FormLabel>
                                <FormControl
                                    type="text"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup controlId="formNewSurname">
                                <FormLabel>Surname</FormLabel>
                                <FormControl
                                    type="text"
                                    value={newSurname}
                                    onChange={(e) => setNewSurname(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup controlId="formNewPhone">
                                <FormLabel>Phone</FormLabel>
                                <FormControl
                                    type="number"
                                    value={newPhone}
                                    onChange={(e) => setNewPhone(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup controlId="formNewEmail">
                                <FormLabel>Email</FormLabel>
                                <FormControl
                                    type="email"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    required
                                />
                            </FormGroup>
                        </>
                    )}
                    <div className='button-Menu' style={{ marginLeft: '8px', marginTop: '20px' }}>
                        <Button type="submit">Update Customer</Button>
                        <Button onClick={onBackToMenu} variant="primary">
                            Back To Customer Menu
                        </Button>
                    </div>
                </Form>
            </CardBody>
        </Card>
    );
}

export default EditCustomer;
