import React from 'react';
import ProjectComponent, { IProjectComponent } from './ProjectTemplate';

const name = "Anonymous Spotify Playlist Mixer";
const details = [
    'Constructed a web application where anonymous users submit Spotify tracks to a global database ',
    'Empowered current Spotify users to download songs into a new or existing Spotify playlist ',
    'Applied an algorithm that filters the added tracks based on similar ‘danceability’ metrics for the created playlist',
    'Utilized TypeScript and React for the front end of part of the application that followed Spotify’s app guidelines',
    'Maintained a Firebase NoSQL database to manage all the songs the anonymous users added',
    'Designed application state through the asynchronous reactive programming library RxJS',
    'Awaiting approval from Spotify to put the application into production mode (the app is available for a demo)',
];
const link = "https://johndesiderio.github.io/playlist-app/";

const SpotifyMixer:React.FC<{}> = () => {
    const props:IProjectComponent = {
        details: details,
        name: name,
        link: link,
    }
    
    return (<ProjectComponent {...props}/>)
}

export default SpotifyMixer;