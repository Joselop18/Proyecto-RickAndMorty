export const reqCharacter = async (character) => {
    const page =+ 1
    let url = `https://rickandmortyapi.com/api/character?page=${page}`
    
    if (character && typeof character === 'string' && character.trim() !== "") {
        url += `&name=${(character.name)}`
    }
    
    try {
        const response = await fetch(url)
        
        const data = await response.json()
        return data
    }catch (error) {
       
    }
}