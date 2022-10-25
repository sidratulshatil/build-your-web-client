import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Courses.css'

const Courses = () => {
    const course = useLoaderData()
    // const { id, name } = course
    console.log(course.name)
    return (
        <div className='course-container'>
            <div>
                <LeftSideNav course={course}></LeftSideNav>
            </div>
            <div className='course-card-container d-grid col-4'>
                {
                    course.map(c => <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={c.img} />
                        <Card.Body>
                            <Card.Title>{c.name}</Card.Title>
                            <Card.Text>
                                {c.details.slice(0, 100) + '...'}
                            </Card.Text>
                            <Button variant="primary" className='bg-warning'><Link to={`/courses/${c._id}`}>Course Details</Link></Button>
                        </Card.Body>
                    </Card>)
                }

            </div>
        </div>
    );
};

export default Courses;