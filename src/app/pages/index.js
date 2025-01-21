import Head from 'next/head';
import videojs from '@videojs';
import '@videojs/'
import VideoPlayer from '../components/VideoPlayer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Video Player App</title>
                <meta name="description" content="A Next.js app to play MP4 videos using Player.js" />
                <script
                    src="https://cdn.jsdelivr.net/npm/playerjs@latest/dist/player.min.js"
                    async
                ></script>
            </Head>
            <main>
                <h1>MP4 Video Player</h1>
                <VideoPlayer />
            </main>
        </>
    );
}
