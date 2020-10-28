import { createAction } from '@reduxjs/toolkit'
import { UPDATE_USER } from '../actionTypes'

const updateUser = createAction(UPDATE_USER)

export default updateUser