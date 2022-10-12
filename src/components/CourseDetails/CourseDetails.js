import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const CourseDetails = () => {
    const course = useLoaderData();
    const coursesData = course.data.questions;

    const quesHandler = (ans) => {
        const {selectOption,id} = ans;
        const matchOption = coursesData.find(e => e.id === id);
        if(matchOption.correctAnswer === selectOption){
            alert('Right Answer');
        }else{
            alert('Wrong Answer');
        }
    }    
    return (
        <div className='course-details-container'>
            <h2>{course.data.name} Questions</h2>
            {
                coursesData.map(courseData => <Question key={courseData.id} courseData={courseData} quesHandler={quesHandler}></Question>)
            }
        </div>
    );
};

export default CourseDetails;

// coursesData.map(courseData => <Question courseData={courseData}></Question>)