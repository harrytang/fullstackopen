/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from 'react';

const Total = (props) => {
    let total = 0;
    props.parts.map(part => total += part.exercises);
    return (
        <div>
            total of {total} exercises
        </div>
    );
};

export default Total;