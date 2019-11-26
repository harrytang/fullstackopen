/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from 'react';

const Notification = ({message}) => {
    if (message.message === null) {
        return null
    }

    return (
        <div className={message.type==='error'?'error':'success'}>
            {message.message}
        </div>
    )
};

export default Notification;