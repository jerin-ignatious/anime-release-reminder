import React, { useState, useEffect } from 'react';
import List from './List';
function App() {
  const [anime, setAnime] = useState([]);
  const d = new Date();
  const weekday = new Array(7);
  weekday[0] = "sunday";
  weekday[1] = "monday";
  weekday[2] = "tuesday";
  weekday[3] = "wednesday";
  weekday[4] = "thursday";
  weekday[5] = "friday";
  weekday[6] = "saturday";
  
  const day = weekday[d.getDay()]

  useEffect(() => {
    const url = 'https://api.jikan.moe/v3/schedule/'+day;
    const getAnime = async() => {
      const response = await fetch(url);
      const anime = await response.json();
      setAnime(anime[day]);
    }
    getAnime();
  }, []);

  return<main>
    <section className='container'>
      <h3>{anime.length} episodes airing today</h3>
      <List anime={anime}/>
      <button onClick={() => setAnime([])}>
        clear all
      </button>
    </section>
  </main>;
}

export default App;
