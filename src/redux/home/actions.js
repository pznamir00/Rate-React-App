import types from './types';

const setBase = base => ({
  type: types.BASE_SET,
  base
})

const fetchRates = rates => ({
  type: types.RATES_FETCHED,
  rates
})

const actions = {
  setBase,
  fetchRates
}

export default actions;
