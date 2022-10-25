import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css'
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

            </Card.Body>
        </Card>
    );
};

export default CourseDetals;