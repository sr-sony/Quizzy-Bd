import React from 'react';

const Options = ({option, id, optionHandler}) => {

    const optionCheckingHandler = (values) => {
        const selectOption = values.target.value;
        const selectData = {selectOption, id};
        optionHandler(selectData);
    }
    return (
        <div>
            <input type="radio" name="selectData" id="option" value={option} onClick={optionCheckingHandler}></input>
            <label for="selectData">{option}</label>
        </div>
    );
};

export default Options;