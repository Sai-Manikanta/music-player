import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ libaryStatus, setLibraryStatus }) => {
    return ( 
        <div className="nav">
            <h1>Music World</h1>
            <button onClick={() => setLibraryStatus(!libaryStatus)}>
                Library {libaryStatus ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faMusic} />}
            </button>
        </div> 
    );
}
 
export default Nav;