import React from 'react';
import './LeftSideNav.css'
const LeftSideNav = ({ course }) => {
    const { name, id, no } = course
    return (
        <div className='list-container'>
            {
                course.map(c => <p>{c.no}-{c.name}</p>)
            }
        </div>
    );
};

export default LeftSideNav;