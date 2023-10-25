import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    mode:"dark"
}

export const globalSlice =createSlice({
    name:"global",
    initialState,
    reducers:{
        setMode: (state) =>{
            // created a function to change the color from dark to light and vice verse
            state.mode = state.mode === 'light'? "dark" :"light";

        }
    }
})
export const {setMode} = globalSlice.actions;
export default globalSlice .reducer;
