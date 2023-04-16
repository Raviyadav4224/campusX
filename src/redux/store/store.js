import {configureStore} from '@reduxjs/toolkit'
import { subscribeReducer, userReducer } from '../reducers/reducers'

const store=configureStore({
    reducer:{
        user:userReducer,
        subscribe:subscribeReducer
    }
})

export default store