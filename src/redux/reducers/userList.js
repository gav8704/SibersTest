import { 
  SET_USER_LIST,
  UPDATE_USER
} from '../actionTypes'
import { 
  localStorageHas,
  localStorageGet
} from '../../helpers/localStorage'

let initialState
const localStorageHasUserList = localStorageHas('userList')

if (localStorageHasUserList) {
  initialState = localStorageGet('userList')
} else {
  initialState = []
}

const userList = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LIST:
      return action.payload;
    case UPDATE_USER:
      return state.map(user => (
        user.id === action.payload.id ?
          action.payload :
          user
        )
      );
    default:
      return state
  }
}

export default userList