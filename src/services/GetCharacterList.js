  
export const getCharacterList = () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(({ results }) => results.map(result => ({
      name: result.name,
      image: result.image
    })
    ));
};
