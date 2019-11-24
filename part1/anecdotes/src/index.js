/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Top = ({anecdotes, top, point}) => {
    return (
        <div>
            {anecdotes[top]}<br/> has {point} votes
        </div>
    );

};

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState([0,0,0,0,0,0]);
    const [top, setTop] = useState(0);

    const randomAnecdote = () => {
        setSelected(
            Math.floor(Math.random() * props.anecdotes.length)
        );
    };

    const voteAnecdote = (idx)=>{
        const updatedPoints = [...points];
        updatedPoints[idx]++;
        setPoints(updatedPoints);
        // find top anecdote (the idx position)
        let i = updatedPoints.indexOf(Math.max(...updatedPoints));
        setTop(i);
    };

    return (
        <div>
            <h2>anecdote of the day</h2>
            {props.anecdotes[selected]}<br/>
            has {points[selected]} votes<br/>
            <button onClick={()=> voteAnecdote(selected)}>Vote</button>
            <button onClick={randomAnecdote}>Next anecdote</button>
            <h2>top anecdote of all time</h2>
            <Top anecdotes={props.anecdotes} top={top} point={points[top]}/>
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