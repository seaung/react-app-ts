import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: "http://localhost:9099/v1/api/",
    timeout: 60000
});

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});


instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

interface Data {
    [index: string]: unknown
};

interface Http {
    get: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
    post: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
};

const http: Http = {
    get(url, data, config) {
        return instance.get(url, {
            params: data,
            ...config
        })
    },
    post(url, data, config) {
        return instance.post(url, data, config)
    }
}

export default http;