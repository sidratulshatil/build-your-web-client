import React from 'react';
import './LeftSideNav.css'
const LeftSideNav = ({ course }) => {
    const { name, id } = course
    return (
        <div className='list-container'>
            {
                course.map(c => <p>{c.id}-{c.name}</p>)
            }
        </div>
    );
};

export default LeftSideNav;