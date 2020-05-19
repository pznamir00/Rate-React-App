import React, { Component } from 'react';
import FormDate from './formDate';
import Result from './result';



class Historical extends Component {

    state = {
        date: "",
        rates: {}
    }

    handleDate = (e) => {
        const newDate = e.target.value;
        this.setState({
            date: newDate
        });
    }

    componentDidMount =  () => {
      //get current date as string
      var today = new Date();
      let day = String(today.getDate()).padStart(2, '0');
      let month = String(today.getMonth() + 1).padStart(2, '0');
      let year = today.getFullYear();

      today = year + '-' + month + '-' + day;
      this.setState({
        date: today
      });
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.date !== this.state.date){
            const API = `https://api.exchangeratesapi.io/${this.state.date}`;
            fetch(API)
                .then(res => res.json())
                .then(result => {
                    this.setState({
                        rates: result.rates
                    });
                })
                .catch(error => console.log(error));
        }
    }

    render() {
        return (
            <React.Fragment>
                <FormDate
                    handleChangeDate={this.handleDate}
                />
                <Result
                    rates={this.state.rates}
                />
            </React.Fragment>
        );
    }
}

export default Historical;
