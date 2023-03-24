import { Box } from '@mui/material';
// useeffect is equivalent hook of didmount jo ki execute hota h jab component load hota h, useEffect 3 components se milkr bna h jo ki hain didmount, didUpadate and didUnMount. UseEffect works like a function jo apne arguments me 2 arguments leta h, first argument hota h ek function and 2nd is ki argument ko kb call krna h. useEffect ko call krna h jb component mount hoga dom me jb wo insert hoga, iske liye hme pass krna pdta h ek empty array. array jb paas kr denge to jo component hoga wo call hoga didmount me.

import { useEffect, useState } from 'react';
import { getNews } from '../service/api';

import Article from'./Article';

const Articles = () => {

    const [news, setNews]=useState([]);

    useEffect(() => {
        dailyNews();
    }, []);

    // this function will be called first by useEffect

    const dailyNews = async () => {
        let response = await getNews();   // as getNews is asynchronous function so it will also return a promise
        console.log(response.data);
        setNews(response.data);
    }

    return(
        <Box>   
            {
                news.map(data => (
                    <Article data={data} />
                ))
            }
        </Box>
    )
}

export default Articles;