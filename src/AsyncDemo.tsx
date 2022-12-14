import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";


export default function AsyncDemo() {

    type Character = {
        id: number,
        name: string,
        status: string
    }

    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://rickandmortyapi.com/api/character")
                setCharacters(response.data.results)
            } catch (e : any) {
                console.error(e.message);
            }
        })();

    }, [])

console.log(characters)

    return (
        <>
<div>
   <ul>{characters.map(character =>
       <li key={character.id}>{character.name} Status: {character.status}</li>)}
   </ul>

</div>

        </>
    )
}