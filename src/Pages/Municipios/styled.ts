import  styled  from "styled-components";


export const container=styled.div`
  max-width:300px;
  box-sizing:border-box;
`;

export const label=styled.label`
  display:flex;
  justify-content: center;
  font-size:14px;
  color:black;
  font-weight:bold;
`;

export const form=styled.form`
  display:flex
  width:100px;
  margin-top:10vh;
  justify-contente:center;
  align-itens:center;

  .explica {
    background-color: yellow;
    font-size: 15px;
    color:green;
    font-weight:bold;
  }

  #tabela{
    max-width:600px;
    margin-left: -120px;
    margin-top:50px;
    
    td{
      border:0;
      text-align:center;
      padding-right:30px;
    }

    th{
        padding-right:15px;
        text-align:center;
        border:1px solid silver;
    }
  
  }
  
`;

export const select=styled.select`
  width:180px;
  margin-top:.5em;
  outline:0;
  text-align:center;
  border-color:silver;
  border-radius: 10px;
`

export const div=styled.div`
    margin-top: 1em;
`




