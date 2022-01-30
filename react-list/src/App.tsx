import React, { useState } from 'react';
import ListManager from './components/ListManager';

function App() {

  const defaultValues = ["Hola", "Adios", "Saludos", "Buenas tardes", "Aguarrás", "Un café, gracias"];

  const [list, setList] = useState<string[]>();

  return (
    <div className="App">
      <ListManager data={defaultValues} onChange={(newValue: string[]) => setList(newValue)} />
    </div>
  );
}

export default App;
