import { combineReducers } from 'redux'
import contactReducer from './contact/reducer'
import historicalReducer from './historical/reducer'
import homeReducer from './home/reducer'
import calculatorReducer from './calculator/reducer'
import sidebarReducer from './sidebar/reducer'




const reducers = combineReducers({
  contact: contactReducer,
  historical: historicalReducer,
  home: homeReducer,
  calculator: calculatorReducer,
  sidebar: sidebarReducer
});


export default reducers;
