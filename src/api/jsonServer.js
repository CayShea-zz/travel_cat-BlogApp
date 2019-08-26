import axios from 'axios';

export default axios.create({
    // have to update everytime my ngrok server is restarted (using FREE version)
    baseURL: ' http://5096f28a.ngrok.io'
})