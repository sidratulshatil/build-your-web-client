import React, { useState } from 'react';
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import ToggleBtn from '../ToggleBtn/ToggleBtn';
import './Header.css'
const Header = () => {

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
                            <Link className='text-style' to={'login'}>Login</Link>
                            <Link className='text-style' to={'register'}>Register</Link>


                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets">
                                {
                                    user?.uid ?
                                        <>
                                            <span></span>
                                            <Button variant="primary" >LogOut</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login'>Login</Link>
                                            <Link to='/register'>Register</Link>
                                        </>
                                }
                            </Nav.Link>
                            <Link to='/profile'>
                                {user?.photoURL ?
                                    <Image style={{ heigth: '10px', width: '30px' }} roundedCircle
                                        src={user.photoURL}></Image>
                                    : <FaUser></FaUser>
                                }
                            </Link> */}
                        </Nav>
                    </Navbar.Collapse>
                    <ToggleBtn toggle={toggle} handleToggleChange={handleToggleChange}></ToggleBtn>
                </Container>
            </Navbar>
        </div>



    );
};

export default Header;