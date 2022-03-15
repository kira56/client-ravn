import axios from "axios";

const clientAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL
});

export default clientAxios;