import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './Login.css'
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    return (
        <div className=' login-div'>
            <Form onSubmit={handleSubmit} className='p-3 '>
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
                <div className='social-login-btn'>
                    <ButtonGroup vertical>
                        <Button className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Log in with Google</Button>
                        <Button variant="outline-dark"><FaGithub></FaGithub> Log in with Github</Button>
                    </ButtonGroup>
                </div>

                <span><p>Didn't have an account?<Link to='/register'>Register Now</Link></p></span>
                <Button variant="primary" type="submit">
                    Login
                </Button>

            </Form>
        </div>
    );
};

export default Login;