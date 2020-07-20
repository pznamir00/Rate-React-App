import React, { Component } from 'react';
import Form from './form';
import Result from './result';
import './style.scss';



class Calculator extends Component {

    state = {
      from: 'CAD',
      to: 'CAD',
      num: 0,
      rates: {},
      res: 0
    }

    handleChangeContent = async (e) => {
        const { value, id } = e.target;
        switch (id) {
          case 'handle-from':
            await this.setState({ from: value });
          break;
          case 'handle-number':
            await this.setState({ num: value });
          break;
          case 'handle-to':
            await this.setState({ to: value });
          break;
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        const ifChangeState = (p, s) => {
          if(p.from !== s.from || p.to !== s.to || p.num !== s.num)
              return true;
          return false;
        };
        if(ifChangeState(prevState, this.state)){
            const from = this.props.rates[this.state.from];
            const to = this.props.rates[this.state.to];
            const { num } = this.state;
            let result = (to/from) * num;
            result = Number((result).toFixed(2));
            this.setState({ res: result });
        }
    }

    render() {
        const { res } = this.state;
        const toRate = ' ' + this.state.to;
        return (
          <React.Fragment>
              <Form
                  rates={this.props.rates}
                  onChangeHandle={this.handleChangeContent}
              />
              <Result
                res={res}
                rate={toRate}
              />
          </React.Fragment>
        );
    }
}



export default Calculator;
