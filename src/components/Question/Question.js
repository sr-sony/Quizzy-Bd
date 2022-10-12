import React from 'react';
import Options from '../Options/Options';
import './Question.css'

const Question = ({courseData, quesHandler}) => {
    const {question,options,correctAnswer,id} = courseData;

    const optionHandler = (ans) => {
        quesHandler(ans);
    }

    const ansHandler = (correctAnswer) => {
        alert(correctAnswer);
    }
    return (
        <div className='question-container'>
            <p><span>Question:</span> {question}</p>
            <div className='option'>
            {
                options.map((option, index) => <Options option={option} key={index} id={id} optionHandler={optionHandler}></Options>)
            }
            </div>
            <button onClick={() => ansHandler(correctAnswer)}>Show Answer</button>
        </div>
    );
};

export default Question;