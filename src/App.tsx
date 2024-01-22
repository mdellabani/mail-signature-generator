import React, {useState} from 'react';
import Form from './Form';
import Signature from './Signature';
import {
  OptionalState,
  State,
  initialOptionalState,
  initialState,
} from './types';

function App() {
  const [state, setState] = useState<State>(initialState);
  const [optionalState, setOptionalState] =
    useState<OptionalState>(initialOptionalState);

  return (
    <div className="App">
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="w-full md:w-1/2 p-4">
          <Form
            state={state}
            optionalState={optionalState}
            setState={setState}
            setOptionalState={setOptionalState}
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <Signature state={state} optionalState={optionalState} />
        </div>
      </div>
    </div>
  );
}

export default App;
