import React, { useState } from 'react';
import ListManager from './components/ListManager';

function App() {

  const [list, setList] = useState<{[x:string]: any[]}>( {
    availableValues: [],
    selectedValues: [],
  });

  return (
    <div className="App">
      <ListManager data={[list, setList]}/>
    </div>
  );
}

export default App;
