import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './Register.css'
const Register = () => {
    const { createUser, updatUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                setError('')
                handleUpdatUserProfile(name, photoURL)
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleUpdatUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updatUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className=' login-div'>
            <Form onSubmit={handleSubmit} className='p-3 '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full name" name='name' required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter photoURL" name='photoURL' required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <span><p>Already have an account?<Link to='/login'>Login Now</Link></p></span>
                <Button className='register-btn' type="submit">
                    Register
                </Button>

            </Form>
        </div>
    );
};

export default Register;