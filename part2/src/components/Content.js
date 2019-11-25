/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */
import React from 'react';
import Part from "./Part";

const Content = (props) => {
    return (
        <>
            {props.parts.map((part, i)=><Part key={i} part={part.name} exercises={part.exercises}/>)}
        </>
    );
};

export default Content;