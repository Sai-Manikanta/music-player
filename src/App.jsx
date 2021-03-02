import React, { useState, useRef } from 'react';
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import Nav from "./components/Nav";
import getSongs from './songs';
import './css/app.scss';

const App = () => {
    const [songs, setSongs] = useState(getSongs());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [libaryStatus, setLibraryStatus] = useState(false);

    const audioRef = useRef(null);

    const songPlayHandler = () => {
        if(!isPlaying){
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
    };

    const selectedSongHandler = async (id) => {
        const song = songs.filter(song => song.id === id);
        await setCurrentSong(song[0]);
        
        // setting active property to songs
        const newSongs = songs.map(song => {
            if(song.id === id){
                return { ...song, active: true }
            } else {
                return { ...song, active: false }
            }
        })
        setSongs(newSongs);
        
        if(isPlaying) audioRef.current.play();
    }

    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPersentage: 0
    });

    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        const animationPersentage  = Math.round((Math.round(currentTime) / Math.round(duration) * 100));

        setSongInfo({ ...songInfo, currentTime, duration, animationPersentage });
    }

    const audioEndedHadle = async () => {
        const index = songs.findIndex(s => s.id === currentSong.id);
        await setCurrentSong(songs[index + 1]);
        if(isPlaying) audioRef.current.play();
    }

    return ( 
        <div className={`app ${libaryStatus ? 'app-active' : ''}`}>
            <Nav libaryStatus={libaryStatus} setLibraryStatus={setLibraryStatus} />
            <Song currentSong={currentSong} />
            <Player audioRef={audioRef} songInfo={songInfo} setSongInfo={setSongInfo} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songPlayHandler={songPlayHandler} currentSong={currentSong} songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs} />
            <Library songs={songs} selectedSongHandler={selectedSongHandler} libaryStatus={libaryStatus} />
            <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} onEnded={audioEndedHadle} ref={audioRef} src={currentSong.audio}></audio>
            <a class="dev-link" href="https://www.facebook.com/saimani.bandaru">Developed and Maintained by Mani Bandaru</a>
        </div>
    );
}
 
export default App;