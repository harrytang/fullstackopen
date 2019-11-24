/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, {useState} from 'react';
import ReactDOM from 'react-dom';

/* Button component */
const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>;

/* statistics */
const Statistics = ({good,neutral,bad}) => {
    return (
        <div>
            <h2>Statistics</h2>
            good: {good}<br />
            neutral: {neutral}<br />
            bad: {bad}<br/>
        </div>
    );
};



const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    // handlers
    const goodHandler = ()=>{
        setGood(good+1);
    };
    const neutralHandler = ()=>{
        setNeutral(neutral+1);
    };
    const badHandler = ()=>{
        setBad(bad+1);
    };


    return (
        <div>
            <h1>Give feedback</h1>

            <Button text="good" onClick={goodHandler} />
            <Button text="neutral" onClick={neutralHandler} />
            <Button text="bad" onClick={badHandler} />

            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
};

ReactDOM.render(<App/>,
    document.getElementById('root')
);