/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useCharacterDetail } from '../hooks/useCharacterDetail';
import CharacterDetailsPresentation from '../components/Presentational/CharacterDetailsPresentation';
import LoadingSpinner from '../components/loading/LoadingSpinner';

const CharacterDetails = ({ match }) => {
  const { loading, character } = useCharacterDetail(match.params.name);
  if(loading) return <LoadingSpinner />;
  console.log(character, 'character deeeeeeeeeeeeeeeeeeetsssss');
  return <CharacterDetailsPresentation {...character} />;
 
};

CharacterDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterDetails;



