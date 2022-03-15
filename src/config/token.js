import clientAxios from "./axios";

const tokenAuth = (token) => {
    if (token) {
        clientAxios.defaults.headers.common['token'] = token;
    } else {
        delete clientAxios.defaults.headers.common['token'];
    }
};

export default tokenAuth;