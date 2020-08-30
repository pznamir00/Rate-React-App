import types from './types';

const setLeft = left => ({
  type: types.LEFT_SET,
  left
})

const actions = {
  setLeft
}

export default actions;
