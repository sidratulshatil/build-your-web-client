import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'
import { FaArrowRight } from 'react-icons/fa'
const CourseDetals = () => {
    const course = useLoaderData()
    const { name, img, details } = course
    return (
        <Card className='course-detail-body' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>Course Name: {name}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to='/cheackout'> <Button className='checkout-btn'>CheckOut <FaArrowRight></FaArrowRight></Button></Link>
            </Card.Body>
        </Card>
    );
};

export default CourseDetals;