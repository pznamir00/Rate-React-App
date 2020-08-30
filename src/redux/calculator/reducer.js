import types from './types';


const initState = {
  from: 'CAD',
  to: 'CAD',
  num: 0,
  res: 0
}


//count results
const countRes = (state, rates) => {
  const from = rates[state.from];
  const to = rates[state.to];
  const { num } = state;
  const result = (to/from) * num;
  return Number((result).toFixed(2));
}



const calculatorReducer = (state = initState, action) => {
  switch(action.type){
    case types.FROM_SET:
      return {
        ...state,
        from: action.from
      };
    case types.TO_SET:
      return {
        ...state,
        to: action.to
      };
    case types.NUM_SET:
      return {
        ...state,
        num: action.num
      };
    case types.RESULT_COUNT:
      return {
        ...state,
        res: countRes(state, action.rates)
      };
    case types.FROM_TO_REVERSE:
      return {
        ...state,
        from: state.to,
        to: state.from
      }
    default:
      return state
  }
}


export default calculatorReducer;
