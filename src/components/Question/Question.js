import React from 'react';
import Options from '../Options/Options';

const Question = ({questionData}) => {
    const {question,options,correctAnswer,id} = questionData;

    const ansHandler = (correctAnswer) => {
        alert(correctAnswer);
    }
    return (
        <div>
            <p>This is question: {question}</p>
            {
                options.map((option, index) => <Options option={option} key={index} id={id}></Options>)
            }
            <button onClick={() => ansHandler(correctAnswer)}>Show ans</button>
        </div>
    );
};

export default Question;