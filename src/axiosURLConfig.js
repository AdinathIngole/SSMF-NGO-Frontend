import axios from "axios";

const axiosURL = axios.create({
    baseURL: 'http://16.171.151.230:5000/api'
});
export default axiosURL;