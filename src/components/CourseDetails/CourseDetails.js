import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const CourseDetails = () => {
    const course = useLoaderData();
    // const queData = course;
    // const questionsData = queData.questions;
    const questionsData = course.data.questions;
    return (
        <div>
            <h2>This is Course Details</h2>
            {
                questionsData.map(questionData => <Question key={questionData.id} questionData={questionData}></Question>)
            }
        </div>
    );
};

export default CourseDetails;

// questionsData.map(questionData => <Question questionData={questionData}></Question>)