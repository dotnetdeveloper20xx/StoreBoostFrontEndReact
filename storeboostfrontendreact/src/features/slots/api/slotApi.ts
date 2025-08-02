// src/features/slots/api/slotApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Slot {
  id: string;
  startTime: string;
  maxBookings: number;
  currentBookings: number;
  isBooked: boolean;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const slotApi = createApi({
  reducerPath: "slotApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7009/api",
  }),
  tagTypes: ["Slot"],
  endpoints: (builder) => ({
    getAvailableSlots: builder.query<Slot[], void>({
      query: () => "slots/available",
      providesTags: ["Slot"],
    }),

    bookSlot: builder.mutation<ApiResponse, string>({
      query: (slotId) => ({
        url: `slots/${slotId}/book`,
        method: "POST",
      }),
      invalidatesTags: ["Slot"],
    }),

    cancelSlot: builder.mutation<ApiResponse, string>({
      query: (slotId) => ({
        url: `slots/${slotId}/cancel`,
        method: "POST",
      }),
      invalidatesTags: ["Slot"],
    }),
  }),
});

// ✅ Export RTK hooks
export const {
  useGetAvailableSlotsQuery,
  useBookSlotMutation,
  useCancelSlotMutation,
} = slotApi;
