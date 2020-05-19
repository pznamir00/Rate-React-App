import React from 'react';


const formStyles = {
  width: '300px',
  margin: 'auto',
  marginTop: '70px'
};

const labelStyles = {
  textAlign: 'center',
  color: '#777',
};


const FormCalc = (props) => {
    return (
        <form style={formStyles} onChange={props.onChangeHandle}>
          <h3 style={labelStyles}>Convert money</h3>
            <p style={labelStyles}>From</p>
            <select id='handle-from' className="form-control">
                {
                    Object.entries(props.rates).map((rate,key) => <option key={key}>{rate[0]}</option>)
                }
            </select>
            <br/>
            <input type="number" id='handle-number' placeholder="0" min="0" className="form-control"/>
            <br/>
            <p style={labelStyles}>To</p>
            <select id='handle-to' className="form-control">
                {
                    Object.entries(props.rates).map((rate,key) => <option key={key}>{rate[0]}</option>)
                }
            </select>
        </form>
    );
}



export default FormCalc;
