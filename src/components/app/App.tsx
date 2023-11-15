import React from 'react';
import { List } from '../list/list';
import { Character } from '../../model/character';

export function App() {
  const charactersData = [{ name: '123' }] as Character[];

  return (
    <div>
      <List characters={charactersData}></List>
    </div>
  );
}
