import React from 'react';

const List = ({anime}) => {
  return (
    <>
      {anime.map((epi) => {
        const {mal_id, titles, source, images} = epi;
        return(
          <article key={mal_id} className='person'>
            <img src={images.jpg.image_url} alt={titles.title}/>
            <div>
              <h4>{titles[0].title}</h4>
              <p>Source: {source}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
