import React, { useState } from 'react';
import IndexPC from './Components/PagePc/indexPC';
import IndexPhone from './Components/PagePhone/indexPhone';

function App() {
  const [vista,setVista] = useState(window.screenX);

  window.addEventListener("resize",()=>setVista(window.screenX));
  return (
    <>
    {
        (vista>540)
        ?<IndexPhone/>
        :<IndexPC/>
    }
    
    </>
  );
}

export default App;
