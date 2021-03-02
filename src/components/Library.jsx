import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs, selectedSongHandler, libaryStatus }) => {

    return ( 
        <div className={`library ${libaryStatus ? 'open-library' : ""}`}>
            <h2>Library</h2>
            <div className="libary-songs">
                {songs.map(song => <LibrarySong key={song.id} currentSong={song} selectedSongHandler={selectedSongHandler} />)}
            </div>
        </div> 
    );
}
 
export default Library;