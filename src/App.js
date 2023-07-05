import React, { useState, useEffect } from 'react';
import List from './List';
function App() {
  
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
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
  const url = 'https://api.jikan.moe/v4/schedules/'+day;
  const STATUS_SUCESS = 200;
  const STATUS_FAIL = 300;
  useEffect(() => {
    
   
    fetch(url).then((resp) => {
      if(resp.status >= STATUS_SUCESS && resp.status < STATUS_FAIL)
      {
        return resp.json();
      }
      else{
        setIsLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);
      }
    })
    .then((anime) => {
      setAnime(anime.data);
      setIsLoading(false);
    })
    .catch((error) => console.log(error));
  }, [url]);

  if(isLoading){
    return<main>
      <section className='container'>
        <h4>Loading...</h4>
      </section>
    </main>
  }
  if(isError){
    return<main>
      <section className='container'>
        <h4>Error...</h4>
      </section>
    </main>
  }
  return<main>
    <section className='container'>
      <List anime={anime}/>
      <button onClick={() => setAnime([])}>
        clear all
      </button>
    </section>
  </main>;
}

export default App;
