import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [isDark, setIsDark] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if (isDark === true) {
            return (document.body.classList.remove('dark-mode'))
        } else if (isDark === false) {
            return (document.body.classList.add('dark-mode'))
        }
    }, [ isDark ]);
    return [ isDark, setIsDark ]
}

export default useDarkMode;