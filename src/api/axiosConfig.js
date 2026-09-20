import axios from 'axios';

export default axios.create({
    baseURL:'http://100.54.102.189:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
