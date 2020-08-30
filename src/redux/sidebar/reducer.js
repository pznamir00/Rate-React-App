import types from './types';



const sidebarReducer = (state = { left: '-300px' }, action) => {
  switch(action.type){
    case types.LEFT_SET:
      return {
        ...state,
        left: action.left
      }
    default:
      return state
  }
}


export default sidebarReducer;
