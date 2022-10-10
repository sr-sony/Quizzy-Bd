import React from 'react';
import Options from '../Options/Options';

const Question = ({queData}) => {
    const {question,options,correctAnswer} = queData;
    return (
        <div>
            <p>This is question</p>
            {
                queData.map(option => <Options option={option}></Options>)
            }
        </div>
    );
};

export default Question;