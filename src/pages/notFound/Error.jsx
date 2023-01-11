import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Error = () => {
    const history = useHistory();
    const navigateTo= (path) =>{
        history.push(path);
    }
    return (
        <div>
            <h1 style={{color: 'tomato'}} >404  -  Page Not Found</h1>
            <button onClick={() => navigateTo('/home')}> GO BACK TO HOME</button>
        </div>
    );
}

export default Error;
