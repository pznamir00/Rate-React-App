import React from 'react';


const selectStyles = {
  width: "500px"
}

const formStyles = {
  textAlign: 'center',
  marginBottom: '30px'
}

const baseHeaderStyles = {
  fontSize: '20px',
  marginRight: 'auto',
  marginLeft: 'auto',
  fontWeight: 'bold'
};


const Form = (props) => {
    return (
        <React.Fragment>
            <div>
                <form style={formStyles}>
                    <span style={baseHeaderStyles}>{props.base}</span>
                    <select className="form-control" onChange={props.onSelect}>
                        { Object.entries(props.rates).map((rate,key) => <option key={key}>{rate[0]}</option>) }
                    </select>
                </form>
            </div>
        </React.Fragment>
    );
}



export default Form;
