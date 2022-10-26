import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './CheackOut.css'
const CheackOut = () => {
    const course = useLoaderData()
    const { name, price } = course

    return (
        <div className=' login-div'>
            <Form>
                <h1>Want To buy <span className='course-name'> {name}</span> Course?</h1>
                <h3>Pay With Your Card</h3>
                <div className='d-flex justify-content-between p-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name On Card</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="" />
                    </Form.Group>
                </div>
                <Form.Group className="mb-3 p-3" controlId="formBasicPassword">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="text" placeholder="1234 1234 1234 1234" />
                </Form.Group>
                <div className='d-flex justify-content-between p-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Expiration Date</Form.Label>
                        <Form.Control type="text" placeholder="MM/YY" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>CVC</Form.Label>
                        <Form.Control type="text" placeholder="CVC" />
                    </Form.Group>
                </div>
                <Form.Group className="mb-3 disable-input">
                    <Form.Label>Course Price</Form.Label>
                    <Form.Control placeholder={price} disabled />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Pay
                </Button>
            </Form>
        </div>
    );
};

export default CheackOut;