export const GetCharacterByName = name => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters${name}`)
    .then(res => res.json())
    .then(json => ({
      name: json.name,
      gender: json.gender,
      status: json.status,
      image: json.image
    }));
};
