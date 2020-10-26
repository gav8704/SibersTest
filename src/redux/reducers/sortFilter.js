import { SET_SORT_FILTER } from '../actionTypes'

const initialState = 'ascending'

const sortFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_FILTER:
      return action.payload
    default:
      return state
  }
}

export default sortFilter