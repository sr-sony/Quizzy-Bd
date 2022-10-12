import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css'
const Courses = ({courseData}) => {
    const {name, logo, id, total} = courseData;
    return (
        <div className='course-container'>       
                <img src={logo} alt=""/>
                <p>Name: {name}</p>
                <p>Total: {total}</p> 
                {/* <Link to={`/course/&{id}`}><button>Show</button></Link>       */}
                <Link to={`/course/${id}`}><button>show</button></Link>
        </div>
    );
};

export default Courses;