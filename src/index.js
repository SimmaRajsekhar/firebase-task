import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios';
import firebase from './Firebase';


axios.defaults.baseURL = 'https://task-34404.firebaseio.com/';
axios.defaults.headers.common['authorization'] = "AUTH_TOKEN";
axios.defaults.headers.post['content-type'] = "application/json";

class RootApp extends React.Component{
    componentDidMount(){
        this.validateuser()
    };
    validateuser = ()=>{
        firebase.auth().onAuthStateChanged(user=>{
           if(user){
               this.props.history.push("/users")
           }
           else{
               this.props.history.push("/")
           }
        })
    }
    render(){
        return <App/>
    }
}
const AppRoot = withRouter(RootApp)
ReactDOM.render(
    <BrowserRouter>
        <AppRoot />
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
