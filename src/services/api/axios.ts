import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJtc3BzIjpbIklubm9zZXRpTVNQIl0sImRldGFpbHMiOnsidXNlcklkIjozLCJ1c2VybmFtZSI6ImFkbWluIiwiZGlzcGxheU5hbWUiOiLQndC10YIg0KTQmNCeIiwiZmlsdGVyVXNlclBhcnRuZXJzIjpmYWxzZX0sInBlcm1pc3Npb25zIjpbImFkbWluIl0sInNlcmllc0lkIjoiMTZZUDdNRlJaMS9qSk9iSWV5azhKZz09Iiwic3ViIjoiYWRtaW4iLCJpYXQiOjE3Mzk5NzAzNTMsImV4cCI6MTc0MDgzNDM1M30.0He9qOHyI6fdHzUvhBoX90l19ZqtNpW3SdWz7b5lhYitd6yfqWeNjRFmq7KQp-vOOFVAEGzJ65YR61j9jQy6vg",
  },
});
