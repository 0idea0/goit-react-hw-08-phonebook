import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://connections-api.herokuapp.com',
    baseUrl: 'https://61f3d6fb10f0f7001768c69f.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: build => ({
    fetchContacts: build.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    addContact: build.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: build.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactApi;
