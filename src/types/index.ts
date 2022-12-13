import React from "react";


export type municipioall={
  'UF-id':number;
  'UF-nome':string;
  'UF-sigla':string;
  'distrito-id':number;
  'distrito-nome':string;
  'mesorregiao-id':number;
  'mesorregiao-nome':string;
  'microrregiao-nome':string;
  'microrregiao-id':number;
  'municipio-id':number;
  'municipio-nome':string;
  'regiao-id':number;
  'regiao-imediata-id':number;
  'regiao-imediata-nome':string;
  'regiao-intermediaria-id':number;
  'regiao-intermediaria-nome':string;
  'regiao-nome':string;
  'regiao-sigla':string;
}


export type est={
  id:number;
  sigla:string;
  nome:string;
  regiao:{
    id:number;
    sigla:string;
    nome:string;
  }
  
}