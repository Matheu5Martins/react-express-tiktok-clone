import React from 'react'
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">

      <div className="app__videos">
        <Video url='https://media.giphy.com/media/ei4OKrzlxQ67oTIKAJ/giphy.mp4' 
        channel="test"
        description="just a test"
        song="i am a song"
        likes={123}
        messages={54}
        shares={12}
        />
        <Video url='https://media.giphy.com/media/t0zjKGzPe97Hi8viIu/giphy.mp4' 
        channel="xoxo"
        description="xocolo"
        song="i am a song"
        likes={200}
        messages={43}
        shares={32}
        />
      </div>
      

      {/* app container */}

      {/* <Video /> */}
    </div>
  );
}

export default App;
