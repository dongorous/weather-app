import { configureStore } from "@reduxjs/toolkit";
import { fetchWeatherApi } from "./services/weatherApi";

export const store = configureStore({
    reducer:{
        [fetchWeatherApi.reducerPath]: fetchWeatherApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchWeatherApi.middleware)
})