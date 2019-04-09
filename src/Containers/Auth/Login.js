import React, { Component } from 'react'
import Header from '../../Components/Header';
import firebase from '../../Firebase';

export default class Login extends Component {
    state = {
        usersRef:firebase.database().ref("google-users")
    };
    handleGoolge = () => {
        console.log("google")
        const googleProvider = new firebase.auth.GoogleAuthProvider()
        firebase
          .auth()
          .signInWithPopup(googleProvider)
          .then((createUser) => {
            this.saveUser(createUser).then(() => {
              console.log("user saved successfully")
              this.props.history.push("users");
            })
          }).catch(err => {
            console.log(err)
          })
      };
      saveUser = createUser => {
        return this.state.usersRef.child(createUser.user.uid).set({
          name: createUser.user.displayName,
          avatar: createUser.user.photoURL
        })
      }
    

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4"> </div>
                        <div className="col-md-4 mt-5">
                        <button type="submit" className="btn btn-primary btn-block mt-3" onClick={this.handleGoolge}>Login with google</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
