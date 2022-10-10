import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const CourseDetails = () => {
    const course = useLoaderData();
    const quesData = course.data.questions;
    return (
        <div>
            <h2>This is Course Details</h2>
            {
                quesData.map(queData => <Question queData = {queData}></Question>)
            }
        </div>
    );
};

export default CourseDetails;