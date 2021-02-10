/* eslint-disable max-len */
import React from 'react';
import CharacterListPresentation from '../components/Presentational/CharacterListPresentation';
import LoadingSpinner from '../components/loading/LoadingSpinner';
import { useCharacterList } from '../hooks/useCharacterList';

const CharacterList = () => {
  const { loading, characters } = useCharacterList();

  if(loading) return <LoadingSpinner />;
  return <CharacterListPresentation characters={characters} />;
};

export default CharacterList;
