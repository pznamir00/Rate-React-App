import React, { Component } from 'react';
import Result from './result';
import Form from './form';
import Calculator from './Calculator/calculator';
import './index.css';




class Home extends Component {

    state = {
        base: "",
        rates: {}
    }

    handleSelect = (e) => {
        const val = e.target.value;
        this.setState({
            base: val
        });
    }

    componentDidMount = () => {
        const defaultBase = "EUR";
        this.setState({
            base: defaultBase
        });
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.base !== this.state.base){
            const API = `https://api.exchangeratesapi.io/latest?base=${this.state.base}`;
            fetch(API)
                .then(res => {
                    if(res.ok){
                        return res.json();
                    }
                    else throw Error("Nie udało się pobrać danych");
                })
                .then(result => {
                    this.setState({
                        base: result.base,
                        rates: result.rates,
                    });
                })
                .catch(err => console.log("Nie udało się pobrać danych - " + err));
        }
    }

    render() {
        return (
            <React.Fragment>
                <Calculator
                    base={this.state.base}
                    rates={this.state.rates}
                />
                <hr/>
                <Form
                    onSelect={this.handleSelect}
                    base={this.state.base}
                    rates={this.state.rates}
                />
                <Result
                    rates={this.state.rates}
                />
            </React.Fragment>
        );
    }
}

export default Home;
