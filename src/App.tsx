import React from 'react';

//Components
import {Header} from './Components/Header';
import {Footer} from './Components/Footer';

//routes
import {Router} from './Routes';

//styled
import * as C from './styled'


function App() {

  return (
    <div className="App">
      <Header/>
        <C.container>
          <Router/>
        </C.container>
      <Footer/>
    </div>
  );
}

export default App;
