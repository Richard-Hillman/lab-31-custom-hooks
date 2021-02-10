import { useState, useEffect } from 'react';
import { GetCharacterList } from '../services/GetCharacterList';

export const useCharacterList = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters]  = useState([]);
  
  useEffect(() => {
    GetCharacterList()
      .then(characters => {
        setCharacters(characters);
        setLoading(false);
      });
  }, []);
  
  
  return {
    loading,
    characters
  };
};
