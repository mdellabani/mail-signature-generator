import React, {useState} from 'react';
import Form from './Form';
import Signature from './Signature';
import {
  OptionalState,
  State,
  initialOptionalState,
  initialState,
} from './types';
import './App.css';

function App() {
  const [state, setState] = useState<State>(initialState);
  const [optionalState, setOptionalState] =
    useState<OptionalState>(initialOptionalState);
  const [showOptional, setShowOptional] = useState(false);

  return (
    <div className="app">
      <div className="w-full md:w-1/2 p-4">
        <Form
          state={state}
          optionalState={optionalState}
          showOptional={showOptional}
          setState={setState}
          setOptionalState={setOptionalState}
          setShowOptional={setShowOptional}
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <Signature state={state} optionalState={optionalState} />
      </div>
    </div>
  );
}

export default App;
