import types from './types';

const setDate = date => ({
  type: types.DATE_SET,
  date
})

const fetchRates = rates => ({
  type: types.RATES_FETCHED,
  rates
})

const actions = {
  setDate,
  fetchRates
}

export default actions;
