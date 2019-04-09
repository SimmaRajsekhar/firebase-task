import React from 'react';

const PageTwo = (props) => {
    let disableButton = !props.email.length || !props.gender.length
    return (
        <div>
            <h4 className="text-center">Page Two</h4>
            <div className="row">
                <div className="col-md-3"> </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="firstName">Email:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            onChange={props.handleOnchange}
                            value={props.email}
                            name="email"
                        />
                    </div>
                    <label htmlFor="firstName">Gender:</label>
                    <div className="custom-control custom-radio">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="male"
                            name="gender"
                            value="male"
                            checked={props.gender === "male"}
                            onChange={props.handleOnchange}
                        />
                        <label className="custom-control-label" htmlFor="male">Male</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="female"
                            name="gender"
                            value="female"
                            onChange={props.handleOnchange}
                        />
                        <label className="custom-control-label" htmlFor="female">Female</label>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-sm btn-success float-left" onClick={props.back}>Back</button>
                <button disabled={disableButton} type="button" className="btn btn-sm btn-primary float-right" onClick={props.next}>Next</button>
            </div>
        </div>
    )
};

export default PageTwo;