import types from './types';

const setAlert = (alert) => ({
  type: types.ALERT_SET,
  alert
})

const actions = {
  setAlert
}

export default actions;
