import React, { Component } from 'react';
import FormCalc from './formCalc';
import ResultCalc from './resultCalc';
import './calc.css';





class Calculator extends Component {

    constructor (props) {
      super(props);
      //default rates
      this.state = {
          from: 'CAD',
          to: 'CAD',
          num: 0,
          rates: {},
          res: 0
      }
    }

    handleChangeContent = async (e) => {
        const val = e.target.value;
        const id = e.target.id;

        switch (id) {
          case 'handle-from':
            await this.setState({
                    from: val,
                  });
          break;
          case 'handle-number':
            await this.setState({
                    num: val,
                  });
          break;
          case 'handle-to':
            await this.setState({
                    to: val,
                  });
          break;
          default: {} break;
        }
    }

    componentDidUpdate = (prevProps, prevState) => {

        function ifChangeState (p, s) {
          if(p.from !== s.from || p.to !== s.to || p.num !== s.num)
              return true;
          return false;
        };

        if(ifChangeState(prevState, this.state))
        {
            const from = this.props.rates[this.state.from];
            const to = this.props.rates[this.state.to];
            const number = this.state.num;

            let result = (to/from) * number;
            result = Number((result).toFixed(2));

            this.setState({
                res: result
            });
        }
    }

    render() {
        const convertResult = this.state.res;
        const convertResultRate = ' ' + this.state.to;
        return (
            <React.Fragment>
                <FormCalc
                    rates={this.props.rates}
                    onChangeHandle={this.handleChangeContent}
                />
                <ResultCalc res={convertResult} rate={convertResultRate}/>
            </React.Fragment>
        );
    }
}



export default Calculator;
