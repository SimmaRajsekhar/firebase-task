import React, { Component } from 'react'
import Header from '../../Components/Header';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default class Users extends Component {
    state = {
        userData: [],
        loading:false,
        error:null
    }
    componentDidMount() {
        this.getUserData()
    }
    getUserData = () => {
        this.setState({loading:true})
        Axios.get("/user.json")
            .then(res => {
                const userData = [];
                for (let key in res.data) {
                    const changedData = {
                        id: key,
                        firstName: res.data[key].firstName,
                        lastName: res.data[key].lastName,
                        email: res.data[key].email,
                        gender: res.data[key].gender,
                        phoneNumber: res.data[key].phoneNumber,
                        Address: res.data[key].Address
                    }
                    userData.push(changedData);

                }
                this.setState({ userData,loading:false,error:null })
            })
            .catch(err => {
                console.log(err)
                this.setState({loading:false,error:"Some thing went wrong"})
            })
    }


    handleDeleteUser = id => {
        // this.props.history.push('/user/' + id)
        this.setState({loading:true})
        Axios.delete(`/user/${id}.json`)
            .then(res => {
                console.log("deleted")
                let userDataCopy = this.state.userData // grab a copy of the todo list
                for (let i = 0; i < userDataCopy.length; i++) {
                    let user = userDataCopy[i]
                    if (user.id === id) {        // if it’s the correct ID...
                        userDataCopy.splice(i, 1)  // delete the item
                        break                      // we’re done! break the loop
                    }
                }
                this.setState({ userData: userDataCopy,loading:false })
            })
            .catch(err => {
                console.log(err)
                this.setState({loading:false})
            })
    };

    handleUpdate = data => {
        console.log(data);
        this.props.history.push('/user', data)
    }
    displayUserData = data => data && (
        data.map(val => <tr key={val.id}>
            <td>{val.firstName}</td>
            <td>{val.lastName}</td>
            <td>{val.email}</td>
            <td>{val.gender}</td>
            <td>{val.phoneNumber}</td>
            <td>{val.Address}</td>
            <td className="text-center">
                <button className="btn btn-sm btn-danger" disabled={this.state.loading} onClick={() => this.handleDeleteUser(val.id)}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <button className="btn btn-sm btn-primary ml-2" onClick={() => this.handleUpdate(val)}>
                    <i className="fa fa-pencil"></i>
                </button>
            </td>
        </tr >)
    )
    render() {
        const { userData } = this.state;
        return (
            <React.Fragment>
                <Header />
                <h1 className="text-center mt-4"> users Data 
                <Link to="user"><button className="btn btn-primary btn-sm float-right mr-4">ADD USER</button></Link
                ></h1>
                <div className="container-fluid">
                    <table className="table table-bordered table-sm mt-5">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>gender</th>
                                <th>Phone NUmber</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.displayUserData(userData)}
                        </tbody>
                    </table>
                    {this.state.loading && <div className=" text-center"><i className="fa fa-spinner fa-spin fa-3x text-primary"></i></div>}
                    {this.state.error ? <p  className="text-center text-danger">{this.state.error}</p> : null}
                </div>
            </React.Fragment>
        )
    }
}
