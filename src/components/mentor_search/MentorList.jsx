// frontend/src/components/MentorList.jsx
import React, { useEffect, useState } from "react";
import { getMentors } from "./api.js";

export default function MentorList({ domain = "", q = "", onOpenProfile } = {}) {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dedupe = (arr) => {
    const map = new Map();
    for (const it of (arr || [])) {
      const key = it._id || it.id || JSON.stringify(it);
      if (!map.has(key)) map.set(key, it);
    }
    return Array.from(map.values());
  };

  useEffect(() => {
    console.log('MentorList useEffect triggered', { domain, q });
    const ac = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('[MENTOR_API] calling getMentors with filters:', { domain, q });
        const data = await getMentors(
          {
            domain: domain || "all",
            q: q || ""
          },
          { signal: ac.signal }
        );
        console.log('[MENTOR_API] data:', data);
        setMentors(Array.isArray(data.mentors) ? data.mentors : []);
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error('MentorList error:', err);
        setError("Failed to load mentors");
        setMentors([]);
      } finally {
        setLoading(false);
      }
    })();

    return () => ac.abort();
  }, [domain, q]);

  const handleOpen = (mentor) => {
    // send the full mentor object to parent; parent will open the modal
    if (typeof onOpenProfile === "function") onOpenProfile(mentor);
  };

  return (
    <div className="mentor-list-page" style={{ background: "#fff", padding: 24, borderRadius: 12 }}>
      <section className="mentor-results">
        {loading ? (
          <div style={{ padding: 32, textAlign: "center" }}>Loading mentors…</div>
        ) : error ? (
          <div style={{ color: "red", padding: 32 }}>{error}</div>
        ) : mentors.length === 0 ? (
          <div style={{ padding: 32, textAlign: "center", color: "#666" }}>No mentors found.</div>
        ) : (
          <div style={{ display: "grid", gap: 12 }}>
            {mentors.map((m) => (
              <div key={m._id || m.id} onClick={() => handleOpen(m)}>
                <div style={{ border: "1px solid #eaeef3", borderRadius: 12, padding: 16, cursor: "pointer", background: "#fff" }}>
                  <div style={{ fontWeight: 700, fontSize: 18 }}>{m.name}</div>
                  <div style={{ color: "#666" }}>{m.title}</div>
                  <div style={{ color: "#9aa4ad", marginTop: 8 }}>{(m.domains || []).join(", ")}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

