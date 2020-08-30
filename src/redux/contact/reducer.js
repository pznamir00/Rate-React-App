import types from './types';


const contactReducer = (state = { alert: {} }, action) => {
  switch(action.type){
    case types.ALERT_SET:
      return {
        ...state,
        alert: {
          content: action.alert.content,
          color: action.alert.color
        }
      }
    default:
      return state
  }
}


export default contactReducer;
