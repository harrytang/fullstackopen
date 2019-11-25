/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from 'react';

const Total = (props) => {
    const total = props.parts.reduce((c, n) => {
        return {exercises: c.exercises + n.exercises};
    });
    return (
        <div>
            total of {total.exercises} exercises
        </div>
    );
};

export default Total;