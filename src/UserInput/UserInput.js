import React from 'react';

const userInput = (props) =>{   

    const textStyle = {
        border: '2px solid green'
    };
    
    return <input style={textStyle} type="text" onChange={props.changed} value={props.initialName}/>;
}

export default userInput;
 