import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Player = ({ audioRef, songInfo, setSongInfo, isPlaying, setIsPlaying, songPlayHandler, currentSong, songs, setCurrentSong, setSongs }) => {

    
    const updateSongActive = () => {
        const newSongs = songs.map(song => {
            if(song.id === currentSong.id){
                return { ...song, active: true }
            } else {
                return { ...song, active: false }
            }
        })
        setSongs(newSongs);
    }
    

    const formatTime = (time) => {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }

    const rangeHandler = (e) => {
        setSongInfo({ ...songInfo, currentTime: e.target.value });
        audioRef.current.currentTime = e.target.value;
    }

    const prevNextSelectHandler = async (track) => {
        const index = songs.findIndex(s => s.id === currentSong.id);
        if(track === 'next') {
            if(index === (songs.length - 1)){
                await setCurrentSong(songs[0]);

                if(isPlaying) audioRef.current.play();
                return
            }
            await setCurrentSong(songs[index + 1]);
            if(isPlaying) audioRef.current.play();
        } else {
            if(index === 0){
                await setCurrentSong(songs[songs.length - 1]);

                if(isPlaying) audioRef.current.play();
                return
            }
            await setCurrentSong(songs[index - 1]);
            if(isPlaying) audioRef.current.play();
        }

        updateSongActive();
    }

    const { color } = currentSong;
    const [color1, color2] = color;

    const animateTrack = { 
        transform: `translateX(${songInfo.animationPersentage}%)` 
    }



    return ( 
        <div className="player">
            <div className="song-timeline">
                <p>{formatTime(songInfo.currentTime)}</p>
                <div className="track" style={{backgroundImage: `linear-gradient(to right, ${color1}, ${color2})` }}>
                    <input min="0" value={songInfo.currentTime || 0} max={songInfo.duration || 0} onChange={rangeHandler} type="range"/>
                    <div className="animate-track" style={animateTrack}></div>
                </div>
                <p>{(songInfo.duration) ? formatTime(songInfo.duration): '0.00'}</p>
            </div>
            <div className="song-controlls" style={{cursor: 'none'}}>
                <FontAwesomeIcon onClick={() => prevNextSelectHandler('prev')} className="icon" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={() => {
                    setIsPlaying(!isPlaying);
                    songPlayHandler();
                }} className="icon" size="2x" icon={isPlaying ? faPause : faPlay } />
                <FontAwesomeIcon  onClick={() => prevNextSelectHandler('next')} className="icon" size="2x" icon={faAngleRight} />
            </div>
        </div>
     );
}
 
export default Player;