"use client";
import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoPlayer = (props) => {
    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);
    const { options, onReady } = props;

    React.useEffect(() => {
        if (!playerRef.current) {
            const videoElement = document.createElement('video-js');
            videoElement.classList.add('vjs-big-play-centered');
            videoRef.current.appendChild(videoElement);

            const player = (playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                if (onReady) {
                    onReady(player);
                }
            }));
        } else {
            const player = playerRef.current;
            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, [options]);

    React.useEffect(() => {
        const player = playerRef.current;
        // Clean up function to dispose the player after the component unmounts
        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, []);

    return (
        <div className='video-player' data-vjs-player>
            <div ref={videoRef}/>
            <style jsx>
                {`
                    .video-player {
                        position: relative;
                        padding-top: 56.25%; /* 16:9 Aspect Ratio */
                    }

                    .video-player > div {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }

                    @media (max-width: 768px) {
                        .video-player {
                            padding-top: 75%; /* 4:3 Aspect Ratio for smaller screens */
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default VideoPlayer;
