import types from './types';



const getTodayAsString = () => {
  let today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  today = year + '-' + month + '-' + day;
  return today;
};



const initState = {
  date: getTodayAsString(),
  rates: {}
}



const historicalReducer = (state = initState, action) => {
  switch(action.type){
    case types.DATE_SET:
      return {
        ...state,
        date: action.date
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


export default historicalReducer;
