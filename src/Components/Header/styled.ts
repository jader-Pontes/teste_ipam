import styled from "styled-components";

export const HeaderArea = styled.div`
// Estilização para area como um todo;
background-color: #fff;
height: 60px;
border-bottom: 1px solid #ccc;   

   .container{
            max-width: 1000px;
            margin: auto;
            display: flex;
   }

   a {
        text-decoration: none;

   }

  

   nav {
     padding-top: 10px;
     padding-bottom: 10px;
     
     ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
     }

     ul {
        display: flex;
        align-items: center;
        height: 40px;
     }

     li {
        margin-left: 20px;
        margin-right: 40px;

        a,button {
            border: 0;
            background: none;
            color: #000;
            font-size: 14px;
            text-decoration: none;
            cursor: pointer;
            outline: 0;

            &:hover{
                color: #999;
            }

            &.button{
                background-color: #ff8100;
                border-radius: 4px;
                color: #fff;
                padding: 5px 10px;
            }

            &.button:hover{
                backgorund-color:#e57706;
            }
        }

     }
 }
    @media (max-width:600px){
        & {
            height: auto;
        }
        .container {
            flex-direction: colum;
        }
        .logo {
            justify-content: center;
            margin:20px 0; 
        }
        nav ul {
            flex-direction: column;
            height: auto;
        }
        nav li {
            margin: 10px 20px; 
        }
}
  
`;