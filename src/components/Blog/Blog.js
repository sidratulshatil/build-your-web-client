import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog'>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is cors?</Accordion.Header>
                    <Accordion.Body>
                        Cross-origin resource sharing (CORS) is a browser mechanism that allows a web page to use assets and data from other pages or domains.

                        Most sites need to use resources and images to run their scripts. These embedded assets present a security risk as the assets could contain viruses or allow server access to a hacker.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Similarly, Firebase is used for many purposes that can help your apps to develop, grow and make it a quality app.
                        Moreover, Firebase is made with a developer in mind to solve all the issues they might face when making an app.
                        <p>There some other options to implement authentication,Such as- </p>
                        <p>1.<strong>MongoDb</strong></p>
                        <p>2.<strong>Okta</strong></p>
                        <p>3.<strong>Auth0</strong></p>
                        <p>4.<strong>Passport</strong></p>
                        <p>5.<strong>Keycloak</strong></p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices
                        <p>
                            Node.js leverages a non-blocking Input/Output (I/O) model. Every application we use typically leverages the same procedure. It takes input from a user or service, processes it, and then presents some form of output. If your application is single-threaded, it will queue all the requests and process them one at a time. Should the server experience high utilization, this queueing or buffering process can lead to noticeable delays for the user.

                            As Node.js uses an asynchronous, non-blocking I/O model, it does not have this performance drawback. Using an example to describe the difference, let us take a scenario of two user requests. Both requests make a call to a database requesting some data. In a standard "blocking I/O" example, the solution cannot start the second user request until it completes the first. As Node.js uses a non-blocking I/O model, it can serve both requests simultaneously, making the solution much faster.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;