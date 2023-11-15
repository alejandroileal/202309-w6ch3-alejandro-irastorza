import React from 'react';
import { Character } from '../../model/character';
import '../../index.css';
import { useState } from 'react';

type Props = {
  character: Character;
};

export function GOTCard({ character }: Props) {
  const [liveness, setLiveness] = useState(true);

  const handleTalk = () => {};

  const handleDie = () => {
    setLiveness((prevLiveness) => !prevLiveness);
    console.log(liveness);
  };

  return (
    <>
      <li className="character col">
        <div className="card character__card">
          <img
            src={`${character.name.toLowerCase()}.jpg`}
            alt={`${character.name} ${character.family}`}
            className={`character__picture ${
              !character.isAlive ? 'card-img-top' : ''
            }`}
          />
          <div className="card-body">
            <h2 className="character__name card-title h4">
              {`${character.name} ${character.family}`}
            </h2>
            <div className="character__info">
              <ul className="list-unstyled">
                <li>Edad: {character.age} años</li>
                <li>
                  Estado:{' '}
                  {character.isAlive ? (
                    <i className="fas fa-thumbs-up"></i>
                  ) : (
                    <i className="fas fa-thumbs-down"></i>
                  )}
                </li>
              </ul>
            </div>
            <div className="character__overlay">
              {/* <ul className="list-unstyled">{makeExtraData(character)}</ul> */}
              <div className="character__actions">
                <button
                  type="button"
                  className="character__action btn talk"
                  onClick={handleTalk}
                >
                  habla
                </button>
                <button
                  type="button"
                  className="character__action btn dead"
                  onClick={handleDie}
                >
                  muere
                </button>
              </div>
            </div>
          </div>
          {/* <i className="emoji">{makEmoji(character.category)}</i> */}
        </div>
      </li>
    </>
  );
}
