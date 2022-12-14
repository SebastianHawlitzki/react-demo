import React, {useEffect, useState} from 'react';
import CharacterCard from "./CharacterCard";
import axios from "axios";
import useCharacters from "./hooks/useCharacters2";
import useCharacters2 from "./hooks/useCharacters2";

export type Character = {
    id: number,
    name: string,
    status: string
    species: string,
    type: string,
    gender: string
    origin: Origin,
    location: Location,
    image: string,
    episode: string[],
    url: string,
    created: string


}

export type Origin = {
    name: string,
    url: string
}

export type Location = {
    name: string
    url: string
}

export default function CharacterGallery() {

    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => setCharacters(response.data.results) )
            .catch(e => console.error(e))

    }, [])

/*
Ausgelagert in useCharacters2.ts:

 const [filter, setFilter] = useState<string>("");
 const characterFilter = characters.filter((name)=> name.name.includes(filter))
   */

 const {characterFilter, filter, setFilter } = useCharacters2();


    return (
        <>
            <br/>
            <div>
                <input onChange={(input) => setFilter(input.target.value)}/>
                <h3>{filter}</h3>
            </div>

            <br/>
            <div className={"characters"}>
                {characterFilter.map(character => (
                    <CharacterCard name={character.name} origin={character.origin.name}
                                   image={character.image}></CharacterCard>
                ))}

            </div>


        </>
    )
}