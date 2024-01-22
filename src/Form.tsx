// FormComponent.tsx
import React, {ChangeEvent, useEffect, useRef} from 'react';
import {OptionalState, State} from './types';
import './Form.css';

const Form = ({
  state,
  optionalState,
  showOptional,
  setState,
  setOptionalState,
  setShowOptional,
}: {
  state: State;
  optionalState: OptionalState;
  showOptional: boolean;
  setState: React.Dispatch<React.SetStateAction<State>>;
  setOptionalState: React.Dispatch<React.SetStateAction<OptionalState>>;
  setShowOptional: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const toggleOptionalList = () => {
    setShowOptional(prevShowOptional => !prevShowOptional);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setShowOptional(prevShowOptional => !prevShowOptional);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  type OptionalStateKeys = keyof OptionalState;

  const handleSelect = (key: string) => {
    const realKey: OptionalStateKeys = key as OptionalStateKeys;
    setOptionalState(prevState => ({
      ...prevState,
      [realKey]: {...prevState[realKey], isSelected: true},
    }));
  };

  const handleDeselect = (key: string) => {
    const realKey: OptionalStateKeys = key as OptionalStateKeys;
    setOptionalState(prevState => ({
      ...prevState,
      [realKey]: {...prevState[realKey], isSelected: false},
    }));
  };

  return (
    <div className="wrapper">
      <form>
        <input
          className="form-input"
          type="text"
          name="fullName"
          value={state.fullName}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          className="form-input"
          type="text"
          name="position"
          value={state.position}
          onChange={handleChange}
          placeholder="Position"
        />
        <input
          className="form-input"
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="form-input"
          type="text"
          name="photo"
          value={state.photo}
          onChange={handleChange}
          placeholder="Photo URL"
        />
      </form>
      <div ref={divRef}>
        <button onClick={toggleOptionalList}>Add Field</button>
        {showOptional && (
          <div>
            {Object.entries(optionalState)
              .filter(([, value]) => !value.isSelected)
              .map(([key, value]) => (
                <div key={key}>
                  <button
                    onClick={() => handleSelect(key)}
                    disabled={value.isSelected}
                  >
                    {key}
                  </button>
                </div>
              ))}
          </div>
        )}
        <div>
          {Object.entries(optionalState).map(([key, value]) => (
            <div key={key}>
              {value.isSelected && (
                <>
                  <input className="form-input" type="text" placeholder={key} />
                  <button onClick={() => handleDeselect(key)}>X</button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
