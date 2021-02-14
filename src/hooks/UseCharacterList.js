import { useState, useEffect } from 'react';
import { getCharacterList } from '../services/GetCharacterList';

export const useCharacterList = () => {
  const [characters, setCharacters]  = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getCharacterList()
      .then((characters) => {
        setCharacters(characters);
        setLoading(false);
      });
  }, []);
  
  
  return {
    characters, 
    loading
  };
};
