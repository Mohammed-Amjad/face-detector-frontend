import React from 'react';
import './Navigation.css'

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn === true) {
        return (
            <nav className="navigation">
                <p onClick={() => onRouteChange('signin')}
                    className='link dim black underline pa3 pointer'>Sign out</p>
            </nav>);
    } else {
        return (
            <nav className='navigation'>
                <p onClick={() => onRouteChange('signin')}
                    className='link dim black underline pa3 pointer'>Sign in</p>
                <p onClick={() => onRouteChange('register')}
                    className='link dim black underline pa3 pointer'>Register</p>
            </nav>
        );
    }
}

export default Navigation;