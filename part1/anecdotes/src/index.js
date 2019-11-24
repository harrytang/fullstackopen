/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState([0,0,0,0,0,0]);

    const randomAnecdote = () => {
        setSelected(
            Math.floor(Math.random() * props.anecdotes.length)
        );
    };

    const voteAnecdote = (idx)=>{
        const updatedPoints = [...points];
        updatedPoints[idx]++;
        setPoints(updatedPoints);
    };

    return (
        <div>
            {props.anecdotes[selected]}<br/>
            has {points[selected]} votes<br/>
            <button onClick={()=> voteAnecdote(selected)}>Vote</button>
            <button onClick={randomAnecdote}>Next anecdote</button>
        </div>
    )
};

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
);