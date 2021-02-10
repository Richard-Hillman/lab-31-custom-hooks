import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetailsPresentation = ({ name, image, rank }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>{rank}</figcaption>
    <figcaption>{name}</figcaption>
  </figure>
);

CharacterDetailsPresentation.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  rank: PropTypes.string
};

export default CharacterDetailsPresentation;
