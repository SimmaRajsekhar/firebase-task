import React from 'react';
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

const PageThree = (props) => {
    let diableButton = !props.phoneNumber || !props.Address
    return (
        <div>
            <h4 className="text-center">Page Three</h4>
            <div className="row">
                <div className="col-md-3"> </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="sel1">Phone Number:</label>
                        <input className="form-control" type="number" name="phoneNumber"  value={props.phoneNumber} onChange={props.handleOnchange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Address:</label>
                        <textarea
                            className="form-control"
                            rows="5"
                            id="comment"
                            onChange={props.handleOnchange}
                            value={props.Address}
                            name="Address"
                        ></textarea>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-sm btn-success float-left" onClick={props.back}>Back</button>
                {props.update ?
                    <button type="button" disabled={diableButton} className="btn btn-sm btn-primary float-right" onClick={() => props.handleUpdate(props.updateId)}>Update</button>
                    :
                    <button type="button" disabled={props.loading} className="btn btn-sm btn-primary float-right" onClick={props.submit}>Submit</button>}
            </div>
        </div>
    )
};

export default PageThree;