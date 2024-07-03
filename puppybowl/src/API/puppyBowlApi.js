import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
    reducerPath: "puppyBowlApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2403-FTB-ET-WEB-PT/players",
    }),

    endpoints: (builder) => ({
        getPlayers: builder.query({
            query: () => "/",

            providesTags: ["players"],
        }),
        getPlayer: builder.query({
            query: (id) => `/${id}`,

            providesTags: ["players"],
        }),
        addPlayer: builder.mutation({
            query: (body) => ({
                url: "/players",
                method: "POST",
                body,
            }),
            invalidatesTags: ["players"],
        }),
    }),
});

export const {useGetPlayersQuery, useGetPlayerQuery, useAddPlayerMutation} = puppyBowlApi