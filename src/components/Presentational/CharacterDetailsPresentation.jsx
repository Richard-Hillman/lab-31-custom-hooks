import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetailsPresentation = ({ character }) => { 
  return (
    <figure data-testid="character">
      <img src={character.image} alt={character.name} />
      <figcaption>{character.name}</figcaption>
    </figure>
  );
};

CharacterDetailsPresentation.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default CharacterDetailsPresentation;
