import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';

export default class Header extends Component {
    state={
        user:false
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.setState({user:true})
            }
        })
    }
    handleLogout=()=>{
        firebase.auth().signOut();
        window.location.reload();
    };
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <a className="navbar-brand" href="/">Contact Manager</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">

                        <Link className="dropdown-item" to="/users">Users</Link>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                       {!this.state.user ?  
                       <Link to="/"><button className="btn btn-outline-success btn-sm my-2 mr-2 my-sm-0" type="button">Login</button></Link>
                        :
                        <button className="btn btn-outline-danger btn-sm my-2 my-sm-0" type="button" onClick={this.handleLogout}>logout</button>
                        }
                       
                    </div>
                </div>
            </nav>
        )
    }
}
