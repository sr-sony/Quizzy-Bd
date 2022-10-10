import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css'
const Courses = ({courseData}) => {
    const {name, logo, id, total} = courseData;
    return (
        <div className='course-container'>       
                <img src={logo}/>
                <p>Name: {name}</p>
                <p>Total: {total}</p> 
                <Link to={`/courseData/&{id}`}><button>Show</button></Link>      
        </div>
    );
};

export default Courses;