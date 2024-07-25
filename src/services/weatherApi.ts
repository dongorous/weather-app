import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 
import { WeatherResponse } from './../types';

// These values should be stored in an .env file for security reasons
// Since this is just a demo, they are hardcoded here
export const baseUrl = "https://api.openweathermap.org";
export const appId = "23351eb974c5b3450019cd8ab44b73f2";

export const fetchWeatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCityData: builder.query<WeatherResponse, string>({
            query: (city) => `/data/2.5/weather?q=${city}&appid=${appId}`,
        })
    })
})

export const { useGetCityDataQuery } = fetchWeatherApi;