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
                url: "/",
                method: "POST",
                body,
            }),
            invalidatesTags: ["players"],
        }),
        deletePlayer: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {useGetPlayersQuery, useGetPlayerQuery, useAddPlayerMutation, useDeletePlayerMutation} = puppyBowlApi