import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, image }) {
  return (
    <>
      <figure>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>    
      </figure>    
    </>
  );
}
Character.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};
export default Character;
