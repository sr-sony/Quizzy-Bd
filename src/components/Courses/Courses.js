import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css'
const Courses = ({courseData}) => {
    const {name, logo, id, total} = courseData;
    return (
        <div className='course-container'>   
           
                <div className='course-item'>
                    <img src={logo} className="" alt=""/>
                    <div>
                    <h5 className="card-title">Name: {name}</h5>
                    <p>Total: {total}</p> 
                    <Link to={`/course/${id}`}><button>show</button></Link>
                    </div>
                </div>
             
                {/* <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
                    <div className='col'>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Name: {name}</h5>
                                <p>Total: {total}</p> 
                                <Link to={`/course/${id}`}><button>show</button></Link>
                             </div>
                         </div>           
                    </div>
                </div> */}
        </div>

        
    );
};

export default Courses;