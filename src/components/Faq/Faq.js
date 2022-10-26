import React from 'react';
import Card from 'react-bootstrap/Card';
import './Faq.css'
const Faq = () => {
    return (
        <div className='faq-container' >
            <div className='faq-item'>

                <h2 className='faq-title'>Is Web Development a Good Career?</h2>
                <p>
                    web developers make a competitive salary compared to other industries. The high earning potential often piques the interest of many computer science prospective students, but the creativity and growth potential are what really seals the deal for most.
                </p>

            </div>
            <div className='faq-item'>

                <h2 className='faq-title'>How important is it to have a problem solving skill for becoming a good web developer?</h2>
                <p>
                    There are many software developers who never really solve anything.Once you learn how to do one of those you pretty much know how to them all.
                </p>

            </div>
            <div className='faq-item'>

                <h2 className='faq-title'>Which programming language is best for web development?</h2>
                <p>
                    There is no doubt that JavaScript is the King of web development and probably the most popular language among web developers. It’s also the only language that allows you to create web applications, both frontend, and backend as well as mobile applications (React Native).
                </p>

            </div>
        </div>
    );
};

export default Faq;