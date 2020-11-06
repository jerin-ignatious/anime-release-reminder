import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [anime, setAnime] = useState(data);
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
