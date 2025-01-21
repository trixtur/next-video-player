"use client";
import React from 'react';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
    const playerRef = React.useRef(null);

    const videoJsOptions = {
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
            {
                src: 'videos/sample.mp4',
                type: 'video/mp4',
            },
        ],
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        player.on('waiting', () => {
            console.log('Player is waiting');
        });

        player.on('dispose', () => {
            console.log('Player will dispose');
        });
    };

    return (
        <div className='video-wrapper'>
            <h1>React and Video.js Example</h1>
            <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
    );
};

export default App;
