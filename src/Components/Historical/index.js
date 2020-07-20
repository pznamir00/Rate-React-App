import React, { useState, useEffect, useRef } from 'react';
import Form from './form';
import Result from './result';
import './style.scss';
import axios from 'axios';


const getTodayAsString = function(){
  let today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  today = year + '-' + month + '-' + day;
  return today;
};



const Historical = () => {

    const [date, setDate] = useState(getTodayAsString());
    const [rates, setRates] = useState({});
    const prevDate = useRef();

    const handleDate = (e) => setDate(e.target.value);

    useEffect(() => {
      if(prevDate.current !== date){
          axios.get(`https://api.exchangeratesapi.io/${date}`)
          .then(result => {
            if(result.status === 200){
              setRates(result.data.rates);
              prevDate.current = date;
            }
            else throw new Error('p');
          })
          .catch(error => console.log(error));
      }
    });

    return (
        <React.Fragment>
            <Form
              date={date}
              handleChangeDate={handleDate}
            />
            <Result
                rates={rates}
            />
        </React.Fragment>
    );
}



export default Historical;
