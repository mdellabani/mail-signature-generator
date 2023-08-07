import {General, Contacts} from './data';
import React from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <General />
      <Contacts />
    </div>
  );
}
