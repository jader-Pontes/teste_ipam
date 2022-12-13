import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
  name:'municipio',
  initialState:{
    municipio:[]
  },
  reducers:{
    setMunicipio:(atual,action)=>{
      atual.municipio=action.payload
    }
  }
});

export const {setMunicipio}=slice.actions;
export default slice.reducer;