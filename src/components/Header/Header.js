import React, { useContext, useState } from 'react';
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import ToggleBtn from '../ToggleBtn/ToggleBtn';
import './Header.css'
import { AuthContext } from '../../contexts/AuthProvider';
import logo from './logo.png'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const [toggle, setToggle] = useState(false)
    const handleToggleChange = () => {
        setToggle(!toggle)
    }

    return (

        <div>
            <Navbar className='nav-style fixed-top' expand="lg">
                <Container>
                    <Navbar.Brand href='/' className='nav-text'><img className='header-logo' src={logo} alt="" /> <span className='nav-style-text'>
                        Build</span> Your Web</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className=' text-style ' to={'/'}>Courses</Link>
                            <Link className='text-style' to={'faq'}>Faq</Link>
                            <Link className='text-style' to={'blog'}>Blog</Link>



                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                {
                                    user?.uid ?
                                        <>
                                            <span className='user-name'>{user?.displayName}</span>
                                            <Button className='ms-2 ' onClick={handleLogout} variant="primary" >LogOut</Button>
                                        </>
                                        :
                                        <>
                                            <Link className='text-style' to={'login'}>Login</Link>
                                            <Link className='text-style' to={'register'}>Register</Link>
                                        </>
                                }
                            </Nav.Link>
                            <Link >
                                {
                                    user?.photoURL ?
                                        <Image className='my' title={user?.displayName} style={{ heigth: '10px', width: '30px' }} roundedCircle
                                            src={user.photoURL}></Image>

                                        : <FaUser ></FaUser>
                                }
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                    <ToggleBtn className='tg-container' toggle={toggle} handleToggleChange={handleToggleChange}></ToggleBtn>
                </Container>

            </Navbar>
        </div>



    );
};

export default Header;