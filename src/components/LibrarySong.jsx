import React from 'react';

const LibrarySong = ({ currentSong, selectedSongHandler }) => {
    return ( 
        <div className={`libary-song ${currentSong.active ? 'active' : ""}`} onClick={() => selectedSongHandler(currentSong.id)}>
            <img src={currentSong.cover} alt="cover"/>
            <div className="song-content">
                <h3>{currentSong.name}</h3>
                <h4>{currentSong.artist}</h4>
            </div>
        </div>
    );
}
 
export default LibrarySong;