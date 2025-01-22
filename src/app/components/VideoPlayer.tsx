"use client";
import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoPlayer = (props) => {
    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);
    const { options, onReady } = props;

    React.useEffect(() => {
        if (!playerRef.current) {
            const player = (playerRef.current = videojs(videoRef.current, options, () => {
                videojs.log("player is ready");
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
        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, []);

    return (
        <div className="w-3/4 p-4 flex items-center justify-center">
            <div
                className="w-full h-full relative overflow-hidden"
                style={{ minHeight: "300px" }} // Add a minimum height to ensure space for controls
            >
                <video
                    ref={videoRef}
                    className="video-js w-full h-full object-contain"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    // Removed the `controls` attribute here
                />
            </div>
        </div>
    );
};

export default VideoPlayer;
