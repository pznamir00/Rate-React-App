import types from './types';

const setFrom = (from) => ({
  type: types.FROM_SET,
  from
})

const setTo = (to) => ({
  type: types.TO_SET,
  to
})

const setNum = num => ({
  type: types.NUM_SET,
  num
})

const countResult = (rates) => ({
  type: types.RESULT_COUNT,
  rates
})

const reverse = () => ({
  type: types.FROM_TO_REVERSE
})

const actions = {
  setFrom,
  setTo,
  setNum,
  countResult,
  reverse
}

export default actions;
