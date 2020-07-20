import React from 'react';



const Result = (props) => {
    return (
        <React.Fragment>
            <table className="table table" id="result">
                <thead>
                    <tr>
                      <th scope="col">Rate</th>
                      <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                  { Object.entries(props.rates).map((rate,key) =>
                    <tr key={key}>
                        <td> {rate[0]} </td>
                        <td> {rate[1]} </td>
                    </tr>
                  )}
                </tbody>
            </table>
        </React.Fragment>
    );
}



export default Result;
