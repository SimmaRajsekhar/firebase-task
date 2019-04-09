import React from 'react';

const PageOne = (props) => {
    let disableButton = props.firstName.length === 0 || props.lastName.length === 0;
    return (
        <div>
            <h4 className="text-center">Page one</h4>
            <div className="row">
                <div className="col-md-3"> </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            onChange={props.handleOnchange}
                            value={props.firstName}
                            name="firstName"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            onChange={props.handleOnchange}
                            value={props.lastName}
                            name="lastName"
                        />
                    </div>
                </div>
            </div>
            <div className="text-right">
                <button type="button" disabled={disableButton} className="btn btn-sm btn-primary" onClick={props.next}>Next</button>
            </div>
        </div>
    )
};

export default PageOne;