import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import Heading from '../Heading/Heading';

const Home = () => {
    const course = useLoaderData();
    const courseDatas = course.data;
    return (
        <div>
            <Heading></Heading>
            {
                courseDatas.map(courseData => <Courses key={courseData.id} courseData={courseData} >

                </Courses>)
            }
            
        </div>
    );
};

export default Home;