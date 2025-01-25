// src/config.ts
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://relate15-be.onrender.com/api";

export const ENDPOINTS = {
  AUTH: {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
  },
  QUEUE: {
    BOOK: "/queue/book",
    STATUS: "/queue/status",
  },
  USER: {
    PROFILE: "/user/profile",
  },
  HEALTH: "/health",
};
