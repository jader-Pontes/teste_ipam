import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
  name:'info',
  initialState:{
    state:[]
  },
  reducers:{
    setState:(atual,action)=>{
      atual.state=action.payload
    }
  }
});

export const {setState}=slice.actions;
export default slice.reducer;