import React, { memo } from 'react';


const Form = memo(props => {
    return (
        <form className="calc-form" onChange={props.onChangeHandle}>
          <h3 className="calc-label-form">Convert money</h3>
            <p className="calc-label-form">From</p>
            <select id='handle-from' className="form-control">
                { Object.entries(props.rates).map((rate,key) => <option selected={rate[0] === props.from} key={key}>{rate[0]}</option>) }
            </select>
            <br/>
            <input type="number" id='handle-number' placeholder="0" min="0" className="form-control"/>
            <br/>
            <p className="calc-label-form float-left">To</p>
            <button type="button" onClick={props.reverse} className="form-control ml-auto mr-auto mb-2 float-right" style={{width: "40px"}}>
              <i className="fa fa-exchange fa-rotate-90"></i>
            </button>
            <select id='handle-to' className="form-control">
                { Object.entries(props.rates).map((rate,key) => <option selected={rate[0] === props.to} key={key}>{rate[0]}</option>) }
            </select>
        </form>
    );
});



export default Form;
