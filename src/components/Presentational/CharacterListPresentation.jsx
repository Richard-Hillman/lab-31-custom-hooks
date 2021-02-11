import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import CharacterDetailsPresentation from './CharacterDetailsPresentation';

function CharacterListPresentation({ characters }) {
  const characterElements = characters.map(character => (
    <li key={character.name}>
      <Link to={`/characters/${character.name}` }>
        <img src={character.image} />
        <h2>{character.name}</h2>
      </Link>
    </li>
  ));

  return (
    <ul data-testid="charactersTest">
      {characterElements}
    </ul>
  );
}

CharacterListPresentation.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterListPresentation;
