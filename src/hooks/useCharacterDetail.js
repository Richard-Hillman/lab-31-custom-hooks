import { useState, useEffect } from 'react';
import { GetCharacterByName } from '../services/GetCharacterByName';

export const useCharacterDetail = name => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);
  
  useEffect(() => {
    GetCharacterByName(name)
      .then(character => {
        setCharacter(character);
        setLoading(false);
      });
  }, [name]);
  
  return {
    loading,
    character
  };
};
