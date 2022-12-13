import React, { useEffect, useState} from 'react';

//Estilo
import * as C from './styled';

//Request
import {getState,getmunicipio,getTotal} from '../../Api/apiRequest';

//Types
import {est, municipioall} from'../../types/index';

//Redux
import {stateRequestSelecto} from '../../redux/hooks/stateRequest';
import { useDispatch } from 'react-redux';
import {setState} from '../../redux/reducers/stateReducer';
import {setMunicipio} from '../../redux/reducers/municipioReducer'
import {setTotal} from '../../redux/reducers/totalReducer'


export const Municipios = () => {

    const [selectValue,setSelectValue]=useState<string>('')
  const [selectMuni,setSelectMuni]=useState('')

  const dispatch=useDispatch();
  const state=stateRequestSelecto((info)=> info.state);
  const municipio=stateRequestSelecto((info)=>info.municipio)
  const municipioAll=stateRequestSelecto((info)=>info.total)

 useEffect(()=>{
  
  async function estados(){
    const value= await getState();
     dispatch(setState(value));
  };
    estados();
  },[dispatch])

  useEffect(()=>{
    async function getMunicipio (){
      const value=await getmunicipio(selectValue);
       dispatch(setMunicipio(value));
    };
    getMunicipio();
  },[selectValue,dispatch])
  
  useEffect(()=>{
    const getall=async()=>{
      const value= await getTotal(selectMuni);
        dispatch(setTotal(value));
    };
    getall ();
  },[selectMuni,dispatch])


  const tabela=municipioAll.total.map((info:municipioall)=>{
    return <table key={info['municipio-id']} id='tabela'>
              <thead>
                <tr>
                  <th><h3>Municipio</h3></th>
                  <th><h3>Microrregiao</h3></th>
                  <th><h3>Mesorregiao</h3></th>
                  <th><h3>UF</h3></th>
                  <th><h3>Região</h3></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>{info['municipio-nome']}</p></td>
                  <td><p>{info['microrregiao-nome']}</p></td>
                  <td><p>{info['mesorregiao-nome']}</p></td>
                  <td><p>{info['UF-nome']}/{info['UF-sigla']}</p></td>
                  <td><p>{info['regiao-nome']}</p></td>
                </tr>
              </tbody>
          </table>
    })
    const setTable=new Set()
  const filtertable=tabela.filter((info)=>{
  const duplicatedtable=setTable.has(info.key);
  setTable.add(info.key);
  return !duplicatedtable;
})
 return (
        <C.container>
          <C.form >
              <C.label>Estados</C.label>
              <C.select value={selectValue} onChange={(e)=>setSelectValue(e.target.value)}>
                <option>Selecione um Estado...</option>
                {state.state.map((state:est)=>{
                  const{sigla,nome,id}=state
                  return <option key={id} value={sigla}>{nome}</option>
                })}
              </C.select>
            <C.div>
              <C.label>Municípios</C.label>
              <C.select  value={selectMuni}  onChange={e=>setSelectMuni(e.target.value)}>
                <option value=''>Selecione um Municipio...</option>
                {municipio.municipio.map((city)=>{
                  const{id,nome}=city
                  return <option key={id} value={id} >{nome}</option>
                })}
              </C.select>
            </C.div>
              {!selectValue && <p className='explica'>Primeiro selecione um Estado.</p>}
                <>
                  {filtertable}
                </>
           </C.form>
      </C.container>
    );
};













