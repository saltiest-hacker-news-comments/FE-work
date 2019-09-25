import axios from 'axios';

const axiosWithAuth = () => {
    console.log("Clicked");
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://salty-hackers.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;