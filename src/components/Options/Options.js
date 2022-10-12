import React from 'react';

const Options = ({option, id}) => {

    const optionCheckingHandler = (values) => {
        const selectOption = values.target.value;
        const selectData = {selectOption, id}
    }
    return (
        <div>
            <input type="radio" name="selectData" id="option" value={option}></input>
            <label for="selectData">{option}</label>
        </div>
    );
};

export default Options;