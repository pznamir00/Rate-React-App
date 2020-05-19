import React from 'react';
import './index.css';



const FormDate = (props) => {
    return (
        <form>
            <p>Select date:</p>
            <input
                type="date"
                onChange={props.handleChangeDate}
                className="form-control"
            />
        </form>
    );
}



export default FormDate;
