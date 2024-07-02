import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
    reducerPath: "puppyBowlApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2403-FTB-ET-WEB-PT",
    }),

    endpoints: (builder) => ({
        getPlayers: builder.query({
            query: () => "/players",
        }),
    }),
});

export const {useGetPlayersQuery} = puppyBowlApi