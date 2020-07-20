import React from 'react';


const Result = (props) => {
    return (
      <p id="res">
        {props.res}
        <span id="rate">{props.rate}</span>
      </p>
    )
}



export default Result;
