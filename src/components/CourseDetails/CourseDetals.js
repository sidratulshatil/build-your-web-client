import React, { useRef } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import Pdf from "react-to-pdf";


const CourseDetals = () => {
    const course = useLoaderData()
    const { name, img, details, price, _id } = course


    const examRef = useRef()
    return (

        <Card ref={examRef} className='course-detail-body' style={{ width: '18rem' }}>

            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className='course-title'>Course Name: {name}   <Pdf targetRef={examRef} filename="Course-details.pdf">
                    {({ toPdf }) => <Link onClick={toPdf} title='Download Pdf' className='download-btn'><FaDownload >
                    </FaDownload></Link>}
                </Pdf></Card.Title>
                <div><h4 className='course-price'>Price:{price}</h4></div>
                <Card.Text >
                    {details}
                </Card.Text>
                <Link to={`/cheackout/${_id}`}> <Button className='checkout-btn'>Get premium access <FaArrowRight></FaArrowRight></Button></Link>
            </Card.Body>
        </Card>
    );
};

export default CourseDetals;