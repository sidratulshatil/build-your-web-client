import React from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'
const LeftSideNav = ({ course }) => {
    const { name, _id, no } = course
    return (
        <div className='list-container'>
            {
                course.map(c => <Link className='btn-text' to={`/courses/${c._id}`}> <p>{c.no}-{c.name}</p></Link>)
            }
        </div>
    );
};

export default LeftSideNav;