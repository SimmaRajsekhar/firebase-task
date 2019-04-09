import React, { Component } from 'react';
import Header from '../Components/Header';
import PageOne from '../Components/WizardPages/PageOne';
import PageTwo from '../Components/WizardPages/PageTwo';
import PageThree from '../Components/WizardPages/PageThree';
import Axios from 'axios';

export default class Wizard extends Component {
    state = {
        page: 1,
        firstName: "",
        lastName: "",
        email: '',
        gender: 'male',
        phoneNumber: '',
        Address: '',
        userData: [],
        update: false,
        updateId: null,
        loading:false
    };

    componentDidMount() {
        this.toUpdateUsersData()
    }
    toUpdateUsersData = () => {
        if (this.props.location.state) {
            const user = this.props.location.state;
            this.setState({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                gender: user.gender,
                phoneNumber: user.phoneNumber,
                Address: user.Address,
                update: true,
                updateId: user.id
            })
        }
    }

    handleNext = () => {
        this.setState({ page: this.state.page + 1 })
    }
    handleBack = () => {
        this.setState({ page: this.state.page - 1 })
    }
    handleSubmit = () => {
        const { firstName, lastName, email, gender, phoneNumber, Address,  } = this.state;
        this.setState({loading:true})
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            gender: gender,
            phoneNumber: phoneNumber,
            Address: Address
        }
        Axios.post('/user.json', userData)
            .then(res => {
                console.log("posted successfully");
                this.setState({ page: 1, firstName: '', lastName: '', email: '', phoneNumber: '', Address: '',loading:false });
                this.props.history.push('/users')
            })
            .catch(err => {
                console.log(err);
                this.setState({loading:false})
            })
    }

    handleUpdate = id => {
        const { firstName, lastName, email, gender, phoneNumber, Address,  } = this.state;
        const updatedData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            gender: gender,
            phoneNumber: phoneNumber,
            Address: Address
        }
        Axios.put(`/user/${id}.json`, updatedData)
            .then(res => {
                console.log("updated")
                this.props.history.push("/users")
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleOnchange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        this.setState({ [input.name]: value })
    }
    render() {

        const { page, firstName, lastName, email, gender, phoneNumber, Address, update, updateId,loading } = this.state;

        let Wizard = null;

        if (page && page === 1) {
            Wizard = <PageOne
                next={this.handleNext}
                handleOnchange={this.handleOnchange}
                firstName={firstName}
                lastName={lastName}
            />
        }
        if (page && page === 2) {
            Wizard = <PageTwo
                next={this.handleNext}
                back={this.handleBack}
                handleOnchange={this.handleOnchange}
                email={email}
                gender={gender}
            />
        }
        if (page && page === 3) {
            Wizard = <PageThree
                submit={this.handleSubmit}
                back={this.handleBack}
                phoneNumber={phoneNumber}
                Address={Address}
                handleOnchange={this.handleOnchange}
                update={update}
                handleUpdate={this.handleUpdate}
                updateId={updateId}
                loading={loading}
            />
        }
        return (
            <React.Fragment>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="card card-header text-center">
                                <div>
                                    <div className="wizard_line"></div>
                                    <i className={`fa fa-user Icons__Styles ${page === 1 || page === 2 || page === 3 ? "active" : ''}`}></i>
                                    <i className={`fa fa-envelope-o Icons__Styles ${page === 2 || page === 3 ? "active" : ''}`}></i>
                                    <i className={`fa fa-heart Icons__Styles ${page === 3 ? "active" : ''}`}></i>
                                </div>
                            </div>
                            <div className="card card-body">
                                {Wizard}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
