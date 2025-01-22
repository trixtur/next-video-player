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
                src: 'https://storage.googleapis.com/media-test-permanent/bob-brickman.mp4',
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
        <div>
            <h1>React and Video.js Example</h1>
            <div className='flex items-center justify-center h-screen'>
                <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
        </div>
    );
};

export default App;
