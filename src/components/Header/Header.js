import React, { useContext, useState } from 'react';
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import ToggleBtn from '../ToggleBtn/ToggleBtn';
import './Header.css'
import { AuthContext } from '../../contexts/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user?.displayName)
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
            <Navbar className='nav-style' expand="lg">
                <Container>
                    <Navbar.Brand className='nav-text'>Build Your Web</Navbar.Brand>
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
                                            <span>{user?.displayName}</span>
                                            <Button className='ms-2' onClick={handleLogout} variant="primary" >LogOut</Button>
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

                                        : <FaUser title={user?.displayName}></FaUser>
                                }
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                    <ToggleBtn toggle={toggle} handleToggleChange={handleToggleChange}></ToggleBtn>
                </Container>
            </Navbar>
        </div>



    );
};

export default Header;