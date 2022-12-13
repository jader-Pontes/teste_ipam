import {configureStore} from '@reduxjs/toolkit';

//reducers
import stateReducer from './reducers/stateReducer';
import municipioReducer from './reducers/municipioReducer';
import totalReducer from './reducers/totalReducer';

export const store=configureStore({
  reducer:{
      state:stateReducer,
      municipio:municipioReducer,
      total:totalReducer
  }
})

export type RootState=ReturnType<typeof store.getState>