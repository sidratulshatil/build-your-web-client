import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const CheackOut = () => {
    return (
        <div className=' login-div'>
            <Form>
                <h2>Pay With Your Card</h2>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default CheackOut;