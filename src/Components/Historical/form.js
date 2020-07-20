import React from 'react';



const Form = (props) => {
    return (
        <form id="historical-form">
            <h2>Select date:</h2>
            <input
                type="date"
                onChange={props.handleChangeDate}
                className="form-control"
                value={props.date}
            />
        </form>
    );
}



export default Form;
