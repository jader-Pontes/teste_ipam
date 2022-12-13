import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
  name:'todos',
  initialState:{
    total:[]
},
  reducers:{
    setTotal:(atual,action)=>{
      atual.total=action.payload
    }
  }
});

export const {setTotal}=slice.actions;
export default slice.reducer;