import React from 'react'
import { Link } from 'react-router-dom';




//css
import { HeaderArea } from './styled';

export const Header=()=>{

  return (
    <HeaderArea>
      <div className='container'>
        <nav>
          <ul>
          <li>
              <Link to='/'>Home</Link>
          </li>
          <li>
              <Link to='/estado'>Consultar Estado</Link>
          </li>
          <li>
              <Link to='/municipio'>Consulta Munícipio</Link>
          </li>
          </ul>
        </nav>
      </div>
    </HeaderArea>

  );

};

