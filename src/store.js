import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
import arithmeticReducer from './ArithmeticSlice';
import todoReducer from './TodoSlice';
import productReducer from './projectByredux/productSlice';

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        arithmetic:arithmeticReducer,
        todo:todoReducer,
        product:productReducer,
    }
})