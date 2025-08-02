// src/api/slots.ts
// This file contains API wrapper functions related to appointment slot operations.

import axios from "axios";

// 🔗 Base API URL for all requests — ensure this matches your backend.
const API_BASE = "https://localhost:7009/api";

/**
 * Fetch all appointment slots, including booked and available ones.
 * @returns AxiosPromise containing array of Slot objects.
 */
export const fetchAllSlots = () => {
  return axios.get(`${API_BASE}/slots`);
};

/**
 * Fetch only the available slots (not fully booked).
 * @returns AxiosPromise containing array of available Slot objects.
 */
export const fetchAvailableSlots = () => {
  return axios.get(`${API_BASE}/slots/available`);
};

/**
 * Create a new appointment slot.
 * @param payload An object with `startTime` and `maxBookings`
 * @returns AxiosPromise with success message and new slot ID.
 */
export const createSlot = (payload: {
  startTime: string;
  maxBookings: number;
}) => {
  return axios.post(`${API_BASE}/slots`, payload);
};

/**
 * Book a specific slot by its ID.
 * @param id GUID of the slot to book
 * @returns AxiosPromise indicating success or failure
 */
export const bookSlot = (id: string) => {
  return axios.post(`${API_BASE}/slots/${id}/book`);
};

/**
 * Cancel a booking for a specific slot by ID.
 * @param id GUID of the slot to cancel booking
 * @returns AxiosPromise indicating success or failure
 */
export const cancelBooking = (id: string) => {
  return axios.post(`${API_BASE}/slots/${id}/cancel`);
};
