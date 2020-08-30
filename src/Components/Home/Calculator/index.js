import React, { Component } from 'react';
import Form from './form';
import Result from './result';
import './style.scss';
import { connect } from 'react-redux';
import actions from '../../../redux/calculator/actions';



class Calculator extends Component {

    handleChangeContent = async (e) => {
        const { value, id } = e.target;
        switch (id) {
          case 'handle-from':
            await this.props.setFrom(value);
          break;
          case 'handle-to':
            await this.props.setTo(value);
          break;
          case 'handle-number':
            await this.props.setNum(value);
          break;
        }
    }

    componentDidUpdate = prevProps => {
      if(prevProps.from !== this.props.from || prevProps.to !== this.props.to || prevProps.num !== this.props.num){
          this.props.countResult(this.props.ratesInstance);
      }
    }

    render() {
        const res = this.props.res;
        const to = ' ' + this.props.to;
        return (
          <React.Fragment>
              <Form
                from={this.props.from}
                to={this.props.to}
                rates={this.props.ratesInstance}
                onChangeHandle={this.handleChangeContent}
                reverse={this.props.reverse}
              />
              <Result
                res={res}
                rate={to}
              />
          </React.Fragment>
        );
    }
}





const mapStateToProps = state => {
  return {
    from: state.calculator.from,
    to: state.calculator.to,
    num: state.calculator.num,
    res: state.calculator.res
  }
}

const mapDispatchToProps = dispatch => ({
  setFrom: from => dispatch(actions.setFrom(from)),
  setTo: to => dispatch(actions.setTo(to)),
  setNum: num => dispatch(actions.setNum(num)),
  countResult: (rates) => dispatch(actions.countResult(rates)),
  reverse: () => dispatch(actions.reverse())
})

export const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator)
