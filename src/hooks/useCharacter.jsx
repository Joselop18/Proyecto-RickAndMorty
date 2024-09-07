import { useState, useEffect } from "react";
import { reqCharacter } from "../service/character";

export const useCharacters = (searchCharacter, currentPage) => {
    const [characters, setCharacters] = useState([])
    const [info, setInfo] = useState({})
    const [species, setSpecies] = useState([])

    useEffect(() => {
        reqCharacter(searchCharacter, currentPage).then((data) => {
            setCharacters(data.results)
            setInfo(data.info)
        }).catch(error => {
            console.error(error)
            setCharacters([])
            setInfo({})
        })
    }, [searchCharacter, currentPage])

    return { characters, info }
};