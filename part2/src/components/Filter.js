/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from 'react';

const Filter = (props) => {
    return (
        <div>
            search name: <input value={props.search} onChange={props.handlerSearch}/>
        </div>
    );
};

export default Filter;