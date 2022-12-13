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
import { info } from 'console';


export const Estados = () => {

  // const [state,setState]=useState([])
  const dispatch=useDispatch();
  const state=stateRequestSelecto((info)=> info.state);


  async function pegar(){
    const value=await getState();
      dispatch(setState(value))
  }

    useEffect(() => {
      pegar()
    },[])

    return (
        <C.container>
          <C.form >
              <C.label>Estados</C.label>
              <C.select>
                <option value="">Selecione um estado...</option>
                {state.state.map((estado:est)=>{
                  const {id,sigla,nome}=estado;
                  return <option key={id} value={sigla}>{nome}/{estado.regiao.nome}</option>
                })}
              </C.select>
                  
            </C.form>
        </C.container>
  );
};


