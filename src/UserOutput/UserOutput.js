import React from 'react';

import './UserOutput.css';

const userOutPut = (props) =>{
    return (
        <div className="UserOutput">
            <p>UserName :: {props.userName}</p>
            <p>Something goes here!!</p>
        </div>
    )
}

export default userOutPut;