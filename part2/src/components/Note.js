/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from 'react'

const Note = ({note}) => {
    return (
        <li>{note.content}</li>
    )
};

export default Note;