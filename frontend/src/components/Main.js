import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import navbar from './dashboard/navbar';
import Home from './dashboard/home';
import login from './login'
import viewanswers from './questions/viewanswers';


//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={login}/>
                <Route path="/viewanswers" component={viewanswers}/>

                {/*Render Different Component based on Route*/}       
            </div>
        )
    }
}
//Export The Main Component
export default Main;