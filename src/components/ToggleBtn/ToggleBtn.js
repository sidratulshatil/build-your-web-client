import React from 'react';
import './ToggleBtn.css'
const ToggleBtn = ({ toggle, handleToggleChange }) => {
    return (
        <div className='toggle-container' onClick={handleToggleChange}>
            <div className={`toggle-btn ${!toggle ? 'disable' : ''}`}>
                {toggle ? "Dark" : "Light"}
            </div>
        </div>
    );
};

export default ToggleBtn;