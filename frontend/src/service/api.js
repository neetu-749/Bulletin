// axios is used to call the api

import axios from 'axios';



export const getNews = async () => {
    // try catch is used for exception handling

    const URL ='http://localhost:8000';

    try{
        return await axios.get(`${URL}/news`);    // this is asynchronous req so it will return a promise
    }catch(error){
        console.log('Error while calling getNews ali ', error);
    }

}