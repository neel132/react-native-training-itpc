import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://dummy.restapiexample.com/api/v1/",
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

axiosInstance.interceptors.request.use(config => {
    let token = '' // get token value from storage or redux store
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
})

axiosInstance.interceptors.response.use(response => {
    // do something here
    return response;
})

export default axiosInstance;