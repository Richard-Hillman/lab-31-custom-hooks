import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Character from '../Presentational/Character';
// import CharacterDetailsPresentation from './CharacterDetailsPresentation';

const CharacterListPresentation = ({ characters }) => {
  console.log(characters);
  const characterElements = characters.map(character => (
    <li key={character.name}>
      <Link to={`/characters/${character.name}`}>
        <Character {...character} /> 
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
    name: PropTypes.string,
    image: PropTypes.string,
  }))
};

export default CharacterListPresentation;
