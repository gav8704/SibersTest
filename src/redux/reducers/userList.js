import { SET_USER_LIST } from '../actionTypes'

const initialState = []

const userList = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LIST:
      return action.payload
    default:
      return state
  }
}

export default userList