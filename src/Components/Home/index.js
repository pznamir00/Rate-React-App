import React, { Component } from 'react';
import Result from './result';
import Form from './form';
import Calculator from './Calculator/index';
import './style.scss';




class Home extends Component {

    state = {
        base: "",
        rates: {}
    }

    handleSelect = (e) => {
        const  { value } = e.target;
        this.setState({ base: value });
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
                if(res.ok) return res.json();
                else throw Error("Failed to fetch data");
            })
            .then(result => {
                this.setState({
                    rates: result.rates,
                });
            })
            .catch(err => console.log("Error - " + err));
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
