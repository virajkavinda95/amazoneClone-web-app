import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-e-challenge-8cd99.cloudfunctions.net/api'
    //http://localhost:5001/e-challenge-8cd99/us-central1/api
});

export default instance;


