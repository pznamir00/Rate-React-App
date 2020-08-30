import React, { Component } from 'react';
import Result from './result';
import Form from './form';
import { CalculatorContainer } from './Calculator/index';
import './style.scss';
import { connect } from 'react-redux';
import actions from '../../redux/home/actions';




class Home extends Component {

    handleSelect = (e) => {
        const { value } = e.target;
        this.props.setBase(value);
    }

    componentDidMount = () => {
        const defaultBase = "EUR";
        this.props.setBase(defaultBase);
    }

    componentDidUpdate = prevProps => {
        if(prevProps.base !== this.props.base){
            const API = `https://api.exchangeratesapi.io/latest?base=${this.props.base}`;
            fetch(API)
            .then(res => {
                if(res.ok) return res.json();
                else throw Error("Failed to fetch data");
            })
            .then(result => {
                this.props.fetchRates(result.rates);
            })
            .catch(err => console.log("Error - " + err));
        }
    }

    render() {
        return (
            <React.Fragment>
                <CalculatorContainer
                    ratesInstance={this.props.rates}
                />
                <hr/>
                <Form
                    onSelect={this.handleSelect}
                    rates={this.props.rates}
                />
                <Result
                    rates={this.props.rates}
                />
            </React.Fragment>
        );
    }
}



const mapStateToProps = state => {
  return {
    base: state.home.base,
    rates: state.home.rates
  }
}

const mapDispatchToProps = dispatch => ({
  setBase: base => dispatch(actions.setBase(base)),
  fetchRates: rates => dispatch(actions.fetchRates(rates))
})

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
