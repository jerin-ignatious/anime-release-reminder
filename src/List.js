import React from 'react';

const List = ({anime}) => {
  return (
    <>
      {anime.map((epi) => {
        const {mal_id, title, source, image_url} = epi;
        return(
          <article key={mal_id} className='person'>
            <img src={image_url} alt={title}/>
            <div>
              <h4>{title}</h4>
              <p>Source: {source}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
