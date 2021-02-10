import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Character from './Character';

const CharacterListPresentation = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character.name}>
      <Link to={`/characters/${character.name}`}>
        <Character 
          image={character.image}
          name={character.name} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="charactersTest">
      {characterElements}
    </ul>
  );
};

CharacterListPresentation.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterListPresentation;
