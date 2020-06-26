import React from 'react';

import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

const NavCondition = () => {
    // const [token, setToken] = useLocalStorage('dark', initialValue);
    // const { user } = useContext(UserContext);
    const test = localStorage.getItem("token");
    console.log(test);

    if (test === null) {
        return <LoggedOut />
    } else {
        return <LoggedIn />
    }

}


export default NavCondition;