import React from 'react';
import img from '../../images/heading.jpg'
import './Heading.css';
const Heading = () => {
    return (
        <div className='heading-container'>
            <img src={img} alt=""></img>
            <h2>Welcome to Quizzy BD</h2>
            <p>Here you can test your knowledge by completing some quiz test and you will get the result.</p>
            <h5>Let's Go!!!</h5>
        </div>
    );
};

export default Heading;