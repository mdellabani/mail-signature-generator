export interface State {
  fullName: string;
  position: string;
  email: string;
  photo: string;
  copied: boolean;
}

interface OptionalItem {
  value: string;
  isSelected: boolean;
}

export interface OptionalState {
  company?: OptionalItem;
  phone?: OptionalItem;
  github?: OptionalItem;
  linkedin?: OptionalItem;
  soundcloud?: OptionalItem;
  website?: OptionalItem;
}

export interface FormProps {
  state: State;
  optionalState: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  setOptionalState: React.Dispatch<React.SetStateAction<OptionalState>>;
}

export interface SignatureProps {
  state: State;
  optionalState: OptionalState;
}

export const initialState: State = {
  fullName: '',
  position: '',
  email: '',
  photo: '',
  copied: false,
};

export const initialOptionalState: OptionalState = {
  company: {value: '', isSelected: false},
  phone: {value: '', isSelected: false},
  github: {value: '', isSelected: false},
  linkedin: {value: '', isSelected: false},
  soundcloud: {value: '', isSelected: false},
  website: {value: '', isSelected: false},
};
