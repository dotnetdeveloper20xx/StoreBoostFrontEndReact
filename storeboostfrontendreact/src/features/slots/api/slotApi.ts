// src/features/slots/api/slotApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Slot {
  id: string;
  startTime: string;
  maxBookings: number;
  currentBookings: number;
  isBooked: boolean;
}

export const slotApi = createApi({
  reducerPath: "slotApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7009/api",
  }),
  tagTypes: ["Slot"], // optional: helps with cache invalidation later
  endpoints: (builder) => ({
    getAvailableSlots: builder.query<Slot[], void>({
      query: () => "slots/available",
      providesTags: ["Slot"],
    }),

    // Optional future enhancement:
    // bookSlot: builder.mutation<boolean, string>({
    //   query: (slotId) => ({
    //     url: `slots/${slotId}/book`,
    //     method: "POST",
    //   }),
    //   invalidatesTags: ["Slot"],
    // }),
  }),
});

export const { useGetAvailableSlotsQuery } = slotApi;
