import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const ToggleDark = () => {
    const [darkMode, setDarkMode] = useDarkMode(false)

    const handleToggle = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
        }

        return (
            <div className='button-container'>
                <button 
                onClick={handleToggle}
                className='dark-button'
                >Dark Mode</button>
            </div>
        )
}

export default ToggleDark;