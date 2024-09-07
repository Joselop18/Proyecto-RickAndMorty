import React from 'react';

export const GridCharacter = ({ characters }) => {
  console.log(characters)
  return (
    <div className="d-flex flex-row flex-wrap" style={{ padding: '30px' }}>
      {characters && characters.length > 0 ? (
        characters.map((char) => (
          <div key={char.id} className="card" style={{ margin: '10px', width: '200px' }}>
            <h1 className="d-flex justify-content-center" style={{ fontSize: '16px' }}> {char.name} </h1>
            <img src={`${char.image}`} alt={char.name} />
          </div>
        ))
      ) : (
        <p>Character not found</p>
      )}
    </div>
  );
};