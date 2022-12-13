import React, { useEffect } from 'react'

//REQUEST
import {getState} from '../../Api/apiRequest'

//style
import * as C  from './styled'

//type
import {est} from '../../types/index';

//Redux
import {stateRequestSelecto} from '../../redux/hooks/stateRequest'
import { useDispatch } from 'react-redux';
import {setState} from '../../redux/reducers/stateReducer'


export const Estados = () => {

  const dispatch=useDispatch();
  const state=stateRequestSelecto((info)=> info.state);

  useEffect(() => {
    async function pegar(){
      const value=await getState();
        dispatch(setState(value))
      }
    pegar()
  },[dispatch])

    return (
        <C.container>
          <C.form >
              <C.label>Estados</C.label>
              <C.select>
                <option value="">Selecione um estado...</option>
                {state.state.map((estado:est)=>{
                  
                  return <option key={estado.id} value={estado.sigla}>{estado.nome}</option>
                })}
              </C.select>
                  
            </C.form>
        </C.container>
  );
};


