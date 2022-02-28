import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CHARACTERS_QUERY = gql`
  {
    characters {
      results {
        id
        name
        image
        gender
        status
        species
        type
      }
    }
  }
`;

const CharactersList = () => {
  const { loading, error, data } = useQuery(CHARACTERS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.characters.results.map(character => (
    <div key={character.id}>
      <p>{character.name}</p>
      <img src={character.image}></img>
      <p>{character.gender}</p>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.type}</p>
    </div>
  ));
};

export default CharactersList;
