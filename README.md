# 📘 StoreBoost API Integration Guide for Front-End Team

This guide provides detailed information for consuming the appointment booking endpoints from the front end.
---

## ✅ Base URL

```
https://localhost:7009/api
```

---

## 🔷 Authentication

🔐 *Currently not implemented*. All endpoints are open in development mode.

---

## 📅 Appointment Slot Endpoints

### 1. `GET /slots`
**Description:** Retrieve **all** slots (booked + available).

**Response:**
```json
[
  {
    "id": "guid",
    "startTime": "2025-08-01T10:00:00Z",
    "maxBookings": 3,
    "currentBookings": 1,
    "isBooked": false
  }
]
```

---

### 2. `GET /slots/available`
**Description:** Retrieve only **available** slots (not fully booked).

**Response:** Same as `/slots`, but filtered to where `isBooked = false`.

---

### 3. `POST /slots`
**Description:** Create a new appointment slot.

**Request:**
```json
{
  "startTime": "2025-08-02T14:00:00Z",
  "maxBookings": 3
}
```

**Response:**
```json
{
  "success": true,
  "message": "Slot created successfully.",
  "data": "guid"
}
```

---

### 4. `POST /slots/{slotId}/book`
**Description:** Book a slot by ID.

**Response:**
```json
{
  "success": true,
  "message": "Slot booked successfully.",
  "data": true
}
```

**Failure Response (e.g. fully booked):**
```json
{
  "success": false,
  "message": "Slot is already fully booked."
}
```

---

### 5. `POST /slots/{slotId}/cancel`
**Description:** Cancel an existing booking for a slot.

**Response:**
```json
{
  "success": true,
  "message": "Booking successfully cancelled.",
  "data": true
}
```

**Failure Response (e.g. no booking):**
```json
{
  "success": false,
  "message": "Slot with ID '...' has no bookings to cancel."
}
```

---

## 🔔 Notifications (Simulated)
The API automatically sends simulated notifications via logs and internal service:
- Booking confirmation
- Fully booked alert
- Cancellation notice

No API call needed from frontend.

---

## ❗ Error Handling Format

All errors follow this format:

```json
{
  "success": false,
  "message": "Error message here"
}
```

---

## 📄 Notes
- All times are in UTC.
- Frontend should display local time using browser conversion.
- You can access Swagger UI for testing endpoints at: `https://localhost:7009/swagger`

---

