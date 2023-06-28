import React, { useState } from 'react';
import IndexPC from './Components/PagePc/indexPC';
import IndexPhone from './Components/PagePhone/indexPhone';

function App() {
  const [vista,setVista] = useState(window.screenX);

  window.addEventListener("resize",()=>{
    setVista(window.innerWidth);
  });
  return (
    <>
    {
        (vista<1240)
        ?<IndexPhone/>
        :<IndexPC/>
    }
    
    </>
  );
}

export default App;
