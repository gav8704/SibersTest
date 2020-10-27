import baseApi from './configureConfig'
import * as endpoints from './endpoints'

export const getUserList = config => baseApi(endpoints.users, config)