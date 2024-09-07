import { useState, useEffect } from "react";

export const SearchCharacter = ({ onSearch, characters }) => {
    const [character, setCharacter] = useState('')
    const [species, setSpecies] = useState([])
    const [selectedSpecies, setSelectedSpecies] = useState('')

    useEffect(() => {
        if (characters && characters.length > 0) {
            const uniqueSpecies = [...new Set(characters.map((char) => char.species))];
            setSpecies(uniqueSpecies);
        }
    }, [characters])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(character)
    };

    return (
        <>
            <div className="container d-flex flex-row justify-content-center align-items-center mt-5">
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input className="form-control" type="text" value={character} onChange={(e) => setCharacter(e.target.value)} placeholder="Buscar personaje"/>
                    <input className="btn btn-outline-dark" type="submit" value="Buscar Personaje"/>
                </form>
            </div>
            
            <div className="container d-flex flex-row justify-content-center align-items-center mt-5">
                <select className="form-select" value={selectedSpecies} onChange={(e) => setSelectedSpecies(e.target.value)}>
                    <option value="">Selecciona una especie</option>
                    {species.map((specie, index) => (
                        <option key={index} value={specie}>
                            {specie}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}