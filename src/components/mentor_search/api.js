// frontend/src/components/mentor_search/api.js
export const BASE_URL = "http://localhost:5001";

console.log("[MENTOR_API] BASE_URL =", BASE_URL);

export async function getMentors(params = {}, options = {}) {
  const qs = new URLSearchParams(params).toString();
  const url = `${BASE_URL}/api/mentors?${qs}`;

  console.log("[MENTOR_API] Fetching:", url);

  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
    signal: options.signal,
    cache: "no-store"
  });

  console.log("[MENTOR_API] API FETCHED:", res.status);

  if (!res.ok) {
    const err = await res.text();
    throw new Error("getMentors failed: " + err);
  }

  const data = await res.json();
  console.log("[MENTOR_API] API RESPONSE", data);
  return data;
}

function getAuthHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

/* ============================
   GET ONE MENTOR BY ID
   (caller can pass abort signal)
============================ */
export async function getMentor(id, { signal } = {}) {
  const res = await fetch(`${BASE_URL}/api/mentors/${id}`, { cache: "no-store", signal });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`getMentor failed: ${res.status} ${txt}`);
  }

  return res.json();
}

/* ============================
   SEND MENTORSHIP REQUEST
   (sends Authorization header if token exists)
============================ */
export async function sendRequest(body) {
  const headers = {
    "Content-Type": "application/json",
    ...getAuthHeader()
  };

  const res = await fetch(`${BASE_URL}/api/requests`, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`sendRequest failed: ${res.status} ${txt}`);
  }

  return res.json();
}

