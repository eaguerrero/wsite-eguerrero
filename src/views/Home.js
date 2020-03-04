import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        
        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        // this.setState({isToggleOn : !this.state.isToggleOn})
        
    }
    
    changeComponent() {
        return (
            <div>
            HOLA
            </div>
            )
        }
        
        render() {
            return (
                <div>
                <button onClick={this.handleClick}>
                <Link to="./about">About</Link>
                </button>
                
                {this.state.isToggleOn ? this.changeComponent() : null}
                </div>
                );
            }
        }
        
        export default Home; 