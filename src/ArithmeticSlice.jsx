import { createSlice } from "@reduxjs/toolkit";
 let initialState = {
                number1:0,
                number2:0,
                result:0
                }
const arithmeticSlice = createSlice({
    name:'arithmetic',
    initialState,
    reducers:{
        add:(state,action)=>{
            let {number1,number2} = action.payload;
            state.number1 = number1;
            state.number2 = number2;
            state.result = number1+number2; 
        },
        sub:(state,action)=>{
            let {number1,number2} = action.payload;
            state.number1 = number1;
            state.number2 = number2;
            state.result = number1-number2; 
        },
        mul:(state,action)=>{
            let {number1,number2} = action.payload;
            state.number1 = number1;
            state.number2 = number2;
            state.result = number1*number2; 
        },
        div:(state,action)=>{
            let {number1,number2} = action.payload;
            state.number1 = number1;
            state.number2 = number2;
            state.result = number1/number2; 
        },
    }
})
export const {add,sub,mul,div} = arithmeticSlice.actions;
export default arithmeticSlice.reducer;