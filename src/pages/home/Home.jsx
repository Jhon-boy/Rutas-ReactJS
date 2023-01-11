import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';


const Home = () => {
    const location = useLocation();
    const history = useHistory();
    const navigate = (path) =>{
        history.push(path);
    }

    const navigateProps = (path) =>{
        history.push({
            pathname: path,
            search: '?online=true', //Query params
            state:{
                online: true
            }
    })
    }

    // const goBack = () =>{
    //     history.goBack();
    // }

    // const goForward = ( ) =>{
    //       history.goForward();
    // }
    return (
        <div>
            <h1 style={{color: 'tomato'}}>Home Page</h1>
            <h2 style={{color: 'tomato'}}>AQUI IRIA LA PAGINA DEL TASK </h2>
            <div>
            <button onClick={() => navigateProps('/login')}>
                    EXIT
                </button> 

                {/* <button onClick={() => navigate('/profile')}>
                    Go Profile
                </button>

                {/* <button onClick={goBack}>
                    Go BACK
                </button>

                <button onClick={goForward}>
                    Go FORWARD
                </button> */}
            </div>
        </div>
        
    );
}

export default Home;
