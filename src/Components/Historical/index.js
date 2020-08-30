import React, { useEffect, useRef } from 'react';
import Form from './form';
import Result from './result';
import './style.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import actions from '../../redux/historical/actions';



const Historical = props => {

    const prevDate = useRef();
    const handleDate = (e) => props.setDate(e.target.value);

    useEffect(() => {
      if(prevDate.current !== props.date){
          axios.get(`https://api.exchangeratesapi.io/${props.date}`)
          .then(result => {
            if(result.status === 200){
              props.fetchRates(result.data.rates);
              prevDate.current = props.date;
            }
            else throw new Error('error');
          })
          .catch(error => console.log(error));
      }
    });

    return (
        <React.Fragment>
            <Form
              date={props.date}
              handleChangeDate={handleDate}
            />
            <Result
                rates={props.rates}
            />
        </React.Fragment>
    );
}



const mapStateToProps = state => {
  return {
    date: state.historical.date,
    rates: state.historical.rates
  }
}

const mapDispatchToProps = dispatch => ({
  setDate: date => dispatch(actions.setDate(date)),
  fetchRates: rates => dispatch(actions.fetchRates(rates))
})

export const HistoricalContainer = connect(mapStateToProps, mapDispatchToProps)(Historical)
