
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.TOKEN);
window.onSpotifyWebPlaybackSDKReady = () => {
    const token = process.env.TOKEN;
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
    });}
