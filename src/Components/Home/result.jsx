import React from 'react';



const Result = (props) => {
    return (
        <React.Fragment>
          <h3 style={{marginLeft: '50px'}}>Current values:</h3>
          <br/>
            <table className="table" id="result">
                <thead>
                    <tr>
                      <th scope="col">Waluta</th>
                      <th scope="col">Wartość</th>
                    </tr>
                </thead>
                <tbody>
                    { Object.entries(props.rates).map((rate,key) =>
                        <React.Fragment>
                            <tr key={key}>
                                <td> {rate[0]} </td>
                                <td> {rate[1]} </td>
                            </tr>
                        </React.Fragment>
                    )}
                </tbody>
            </table>
        </React.Fragment>
    );
}



export default Result;
