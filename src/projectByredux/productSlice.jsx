import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    products:[]
}
const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        getproducts:async(state,action)=>{
            try{
                const response = await fetch(action.payload);
                const data = await response.json();
                state.products.push(data);
                console.log(state.products);
                console.log(action.payload);
            }catch(error){
                console.log(error);
            }
        }
    }
})
export const {getproducts} = productSlice.actions;
export default productSlice.reducer;