/* eslint-disable max-len */
import React from 'react';
import CharacterListPresentation from '../components/Presentational/CharacterListPresentation';
import LoadingSpinner from '../components/loading/LoadingSpinner';
import UseCharacterList from '../hooks/UseCharacterList';

const CharacterList = () => {
  const { loading, characters } = UseCharacterList();

  if(loading) return <LoadingSpinner />;
  return <CharacterListPresentation characters={characters} />;
};

export default CharacterList;
