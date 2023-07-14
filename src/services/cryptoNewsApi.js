import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': '2339fd9abfmsh62d9785d6b8f2eep111515jsn40425785cc3d',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
}

const baseUrl = 'https://crypto-news16.p.rapidapi.com/news/top/20';

const createRequest = (url) => ({
    url,headers : cryptoNewsHeaders
})

export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getCryptoNews : builder.query({
            query : () => createRequest(),
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;