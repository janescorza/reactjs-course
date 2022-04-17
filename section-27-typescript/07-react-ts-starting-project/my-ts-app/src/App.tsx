import React from 'react';
import Todos from './components/Todos';

function App() {
  return (
    <div >
      <Todos items={['Learn React','Learn yeash']} num={3}/>
    </div>
  );
}

export default App;
