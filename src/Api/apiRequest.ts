const estado:string='https://servicodados.ibge.gov.br/api/v1/';

export const getState=async()=>{
  const url=`${estado}/localidades/estados`;
    return await fetch(url).then(response=>  response.json());
};

  export const getmunicipio= (uf:string)=>{
   if(!uf) return Promise.resolve([]) 
    const url=`${estado}/localidades/estados/${uf}/municipios`;
      return fetch(url).then(response => response.json())
};    
  

export const getTotal= async(municipio:string)=>{
  if(!municipio) return Promise.resolve([]);
    const url=`${estado}/localidades/municipios/${municipio}/distritos/?view=nivelado`;
      return await fetch(url).then(response => response.json())
}

