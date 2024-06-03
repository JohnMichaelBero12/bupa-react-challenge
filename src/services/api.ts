import axios from 'axios';
export const fetchData = async(baseURL: string) => {
    debugger;
    try{
        return await axios.get(baseURL);
    }catch(e){
        return e;
    }
    
}