import { useState, useEffect } from 'react';
import { getCharacterByName } from '../services/GetCharacterByName';

export const useCharacterDetail = name => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getCharacterByName(name)
      .then((character) => {
        setCharacter(character);
        setLoading(false);
      });
  }, [name]);
  
  return {
    character,
    loading
  };
};
