import {useEffect, useState} from "react";
import axios from "axios/index";
import {Character} from "../CharacterGallery";


export default function useCharacters2() {


    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => setCharacters(response.data.results))
            .catch(e => console.error(e))

    }, [])


    const [filter, setFilter] = useState<string>("");

    const characterFilter = characters.filter((name) => name.name.includes(filter))


    return {characters, characterFilter, filter, setFilter}
}

