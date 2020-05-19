import React from 'react';
import './calc.css';


const ResultCalc = (props) => {
    return (
      <p id="res">
        {props.res}
        <span id="rate">{props.rate}</span>
      </p>
    )
}



export default ResultCalc;
