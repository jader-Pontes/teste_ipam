import React,{useState} from 'react';

//Components
import {Header} from './Components/Header';
import {Footer} from './Components/Footer';

//routes
import Routes from './Routes';

//styled
import * as C from './styled'


function App() {

  return (
    <div className="App">
      <Header/>
        <C.container>
          <Routes/>
        </C.container>
      <Footer/>
    </div>
  );
}

export default App;
