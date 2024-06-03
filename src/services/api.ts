import axios from 'axios';
export const fetchData = async(baseURL: string) => await axios.get(baseURL);