import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <h1>Some frequent question and answer.</h1>
            <div className='blog'>
            <h4>What is the purpose of React Router?</h4>
            <p><span>Ans: </span>React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
            </div>
            <div className='blog'>
            <h4>How does Context API works?</h4>
            <p><span>Ans: </span>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.With the new Context API, you have that functionality by default. A lot of hype has been made that the Context API will render Redux obsolete.</p>
            </div>
            <div className='blog'>
            <h4>What is useRef hook?</h4>
            <p><span>Ans: </span>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;