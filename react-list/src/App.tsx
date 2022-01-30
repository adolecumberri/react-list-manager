import React, { useState } from 'react';
import ListManager from './components/ListManager';

function App() {

  const [list, setList] = useState<string[]>( 
    ["Hola", "Adios", "Saludos", "Buenas tardes", "Aguarrás", "Un café, gracias"]
  );

  return (
    <div className="App">
      <ListManager data={[list, setList]}/>
    </div>
  );
}

export default App;
