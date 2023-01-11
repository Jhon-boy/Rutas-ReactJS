
import './App.css';
import { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch,  Redirect} from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './form/login';
import Register from './form/Register';
import Error from './pages/notFound/Error';



function App() {

  // let loggeado = false;
  let loggeado  =  localStorage.getItem('credentials');
  useEffect(() => {
    loggeado =  localStorage.getItem('credentials');
    console.log('User Logged?', loggeado)

}, []);
  return (
   <Router>
    <Switch>
    <Route  exact path='/login' component={Login}/>
    <Route  exact path='/register' component={Register}/>
    <Route  exact path='/home'>

        {
                loggeado ?
                    () =>{
                      alert('WELCOME MR JHON ')
                      return (<Home></Home>) //Redifigue a la home
                    }
                    : 
                    () =>{
                      alert('You must be logged in. Redirecting to Login')
                      return (<Login></Login>)
                    }
              }

       </Route>
       <Route component={Error}/>

    </Switch>
   </Router>
  );
}

export default App;
