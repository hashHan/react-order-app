import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-order-app-han.firebaseio.com/'
});

export default instance;