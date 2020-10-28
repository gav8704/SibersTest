import baseApi from './configureConfig'
import * as endpoints from './endpoints'

export const fetchUserListApi = config => baseApi(endpoints.users, config)