import React, { useEffect } from 'react';
import { GOTCard } from '../card/got.card';
import '../../index.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useCharacters } from '../../hooks/characters/use.characters';

export function List() {
  const { characters, state } = useSelector(
    (state: RootState) => state.gotCharacters
  );

  const { loadCharacters } = useCharacters();

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  if (state === 'loading') {
    return <p>Loading characters...</p>;
  }

  if (state === 'error') {
    return <p>Ups! There was an error loading characters 😔</p>;
  }

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
