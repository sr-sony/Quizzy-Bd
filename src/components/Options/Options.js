import React from 'react';

const Options = ({option}) => {
    return (
        <div>
            <input type="radio" name="option" id="html"></input>
            <label for="html">{option}</label>
        </div>
    );
};

export default Options;