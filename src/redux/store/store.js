import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from '../reducers/reducers'

const store=configureStore({
    reducer:{
        user:userReducer
    }
})

export default store