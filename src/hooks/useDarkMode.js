import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [dark, setDark] = useLocalStorage('dark', initialValue);

    useEffect(() => {
        const body = document.body;
        // const Jambotron = document.querySelector('Jumbotron');

        dark ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')

    }, [dark]);

    return [dark, setDark];
}