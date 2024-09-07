import { useState } from "react"
import { SearchCharacter } from "./SearchCharacter"
import { GridCharacter } from "./GridCharacter"
import { useCharacters } from "../hooks/useCharacter"
import { Pagination } from "./Pagination"



export const RickAndMortyApp = () => {
    const [currentpage, setCurrentpage] = useState(1)
    const [searchCharacter, setSearchCharacter] = useState("")
    const { characters, info } = useCharacters(currentpage, searchCharacter);
    
    

    const handleSearch = (character) => {
        setSearchCharacter(character)
        setCurrentpage(1)
    }
    
  return (
    <>
        <SearchCharacter onSearch={handleSearch}/>
        <GridCharacter characters={characters} />
        <Pagination className="d-flex justify-content-center" count={info.pages || 1} page={currentpage} onChange={(e, value) => (setCurrentpage(value))}/>
    </>
  )
}