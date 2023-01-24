import React from 'react';
import './App.css';
import { DefaultButton } from './lib';

function App() {
  return (
    <div className="App">
      <DefaultButton
        onClick={() => console.log('button clicked')}
        size='large'
        theme='tertiary'
        color='#2C5DE5'
      >
        test
      </DefaultButton>
    </div>
  );
}

export default App;
