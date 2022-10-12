import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const CourseDetails = () => {
    const course = useLoaderData();
    // const queData = course;
    // const coursesData = queData.questions;
    const coursesData = course.data.questions;
    return (
        <div>
            <h2>This is Course Details</h2>
            {
                coursesData.map(courseData => <Question key={courseData.id} courseData={courseData}></Question>)
            }
        </div>
    );
};

export default CourseDetails;

// coursesData.map(courseData => <Question courseData={courseData}></Question>)