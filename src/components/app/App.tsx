import React from 'react';
import { List } from '../list/list';

export function App() {
  const charactersData = { name: '123' };

  return (
    <div>
      <List characters={charactersData}></List>
    </div>
  );
}
