import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const CourseDetails = () => {
    const course = useLoaderData();
    const queData = course;
    // const questionsData = queData.questions;
    return (
        <div>
            <h2>This is Course Details</h2>
            {
                
                
            }
        </div>
    );
};

export default CourseDetails;

// questionsData.map(questionData => <Question questionData={questionData}></Question>)