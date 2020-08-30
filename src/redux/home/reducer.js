import types from './types';


const initState = {
  base: "",
  rates: {}
}



const homeReducer = (state = initState, action) => {
  switch(action.type){
    case types.BASE_SET:
      return {
        ...state,
        base: action.base
      }
    case types.RATES_FETCHED:
      return {
        ...state,
        rates: action.rates
      }
    default:
      return state
  }
}


export default homeReducer;
