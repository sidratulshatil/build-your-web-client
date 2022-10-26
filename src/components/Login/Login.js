import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './Login.css'
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const { providerLogin, githubLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                if (user) {
                    navigate(from, { replace: true })
                }
                else {
                    alert('You are not logged in!!')
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGithubLogin = () => {
        githubLogin(githubProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                if (user) {
                    navigate(from, { replace: true })
                }
                else {
                    alert('You are not logged in!!')
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
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
                if (user) {
                    navigate(from, { replace: true })
                }
                else {
                    alert('You are not logged in!!')
                }
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
                        <Button onClick={handleGoogleLogin} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Log in with Google</Button>
                        <Button onClick={handleGithubLogin} variant="outline-dark"><FaGithub></FaGithub> Log in with Github</Button>
                    </ButtonGroup>
                </div>

                <span><p>Didn't have an account?<Link to='/register'>Register Now</Link></p></span>
                <Button className='register-btn' type="submit">
                    Login
                </Button>

            </Form>
        </div>
    );
};

export default Login;