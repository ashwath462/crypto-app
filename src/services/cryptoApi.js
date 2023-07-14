import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '2339fd9abfmsh62d9785d6b8f2eep111515jsn40425785cc3d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl  = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({
    url,headers : cryptoApiHeaders
})
export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query : (uuid) => createRequest(`/coin/${uuid}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ uuid, timeperiod }) => createRequest(`coin/${uuid}/history?timeperiod=${timeperiod}`),
          }),
    })
})

export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery
} = cryptoApi;