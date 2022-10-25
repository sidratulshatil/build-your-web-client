import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Courses.css'

const Courses = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div className='course-container'>
            <div>
                <LeftSideNav course={course}></LeftSideNav>
            </div>
            <div className='course-card-container'>
                {
                    course.map(c => <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={c.img} />
                        <Card.Body>
                            <Card.Title>{c.name}</Card.Title>
                            <Card.Text>
                                {c.details.slice(0, 100) + '...'}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>)
                }

            </div>
        </div>
    );
};

export default Courses;