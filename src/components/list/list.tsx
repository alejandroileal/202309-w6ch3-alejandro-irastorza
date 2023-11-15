import React from 'react';
import { Character } from '../../model/character';
import { GOTCard } from '../card/got.card';
import '../../index.css';

type props = {
  characters: Character[];
};

export function List({ characters }: props) {
  return (
    <div>
      <ul className="characters-list row list-unstyled">
        {characters.map((item) => (
          <GOTCard key={item.name} character={item}></GOTCard>
        ))}
      </ul>
    </div>
  );
}
