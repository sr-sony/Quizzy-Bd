import React from 'react';
import './Option.css';

const Options = ({option, id, optionHandler}) => {

    const optionCheckingHandler = (values) => {
        const selectOption = values.target.value;
        const selectData = {selectOption, id};
        optionHandler(selectData);
    }
    return (
        <div className='option-container'>
            <input type="radio" name="selectData" id="option" value={option} onClick={optionCheckingHandler}></input>
            <label for="selectData">{option}</label>
        </div>
    );
};

export default Options;