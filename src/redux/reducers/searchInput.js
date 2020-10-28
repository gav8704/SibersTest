import { SET_SEARCH_INPUT } from '../actionTypes'

const initialState = ''

const searchInput = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_INPUT:
      return action.payload;
    default:
      return state;
  }
}

export default searchInput