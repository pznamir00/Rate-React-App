import React from 'react';



const Form = (props) => {
    return (
      <div>
        <form className="form-styles">
          <span className="base-header-styles">{props.base}</span>
          <select className="form-control" onChange={props.onSelect}>
              { Object.entries(props.rates).map((rate,key) => <option key={key}>{rate[0]}</option>) }
          </select>
        </form>
      </div>
    );
}



export default Form;
