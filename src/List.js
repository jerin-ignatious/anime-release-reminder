import React from 'react';

const List = ({anime}) => {
  return (
    <>
      {anime.map((epi) => {
        const {id, name, episode, image} = epi;
        return(
          <article key={id} className='person'>
            <img src={image} alt={name}/>
            <div>
              <h4>{name}</h4>
              <p>Episode {episode}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
