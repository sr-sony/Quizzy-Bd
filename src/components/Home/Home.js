import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Home = () => {
    const course = useLoaderData();
    const courseDatas = course.data;
    return (
        <div>
            <h1>This is Home</h1>
            {
                courseDatas.map(courseData => <Courses key={courseData.id} courseData={courseData} >

                </Courses>)
            }
            
        </div>
    );
};

export default Home;