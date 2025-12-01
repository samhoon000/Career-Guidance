// frontend/src/components/MentorProfileModal.jsx
import React, { useEffect, useState } from "react";
import { getMentor, sendRequest } from "./api.js";

export default function MentorProfileModal({ mentor: mentorProp, mentorId: mentorIdProp, onClose }) {
  // component supports either passing a full mentor object (mentorProp)
  // OR passing a mentorId (mentorIdProp). If both present, mentorProp wins.
  const [mentor, setMentor] = useState(mentorProp || null);
  const [loading, setLoading] = useState(!mentorProp && !!mentorIdProp);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    // if parent later passes a mentor object, sync it
    if (mentorProp) {
      setMentor(mentorProp);
      setLoading(false);
      setError(null);
      return;
    }

    // if we have an id but no object, fetch it
    if (!mentorIdProp) return;

    let isMounted = true;
    const ac = new AbortController();
    setLoading(true);
    setError(null);

    getMentor(mentorIdProp, { signal: ac.signal })
      .then((m) => {
        if (!isMounted) return;
        setMentor(m);
      })
      .catch((err) => {
        if (!isMounted) return;
        if (err.name === "AbortError") return;
        console.error("getMentor error", err);
        setError("Failed to load mentor details.");
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });

    return () => {
      isMounted = false;
      ac.abort();
    };
  }, [mentorProp, mentorIdProp]);

  async function handleSend() {
    if (!mentor || !mentor._id) {
      alert("Mentor info missing. Can't send request.");
      return;
    }

    const payload = {
      // the backend expects mentorId and identifies student from JWT (auth middleware)
      mentorId: mentor._id,
      message
    };

    try {
      setSending(true);
      await sendRequest(payload);
      alert("Request sent successfully!");
      onClose();
    } catch (err) {
      console.error("sendRequest failed", err);
      // surface backend message if present
      try {
        const body = await err.message;
      } catch (_) {}
      alert("Failed to send request. Check authentication and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div style={modalBackdrop}>
      <div style={modalBox}>
        <button style={closeBtn} onClick={onClose} aria-label="Close">✕</button>

        {loading ? (
          <>
            <h3>Loading mentor...</h3>
            <p style={{ color: "#666" }}>Please wait while mentor details load.</p>
          </>
        ) : error ? (
          <>
            <h3>Error</h3>
            <p style={{ color: "red" }}>{error}</p>
          </>
        ) : mentor ? (
          <>
            <h2>{mentor.name || "No name"}</h2>
            <p style={{ marginTop: "-10px", color: "#666" }}>{mentor.title || "No title"}</p>

            <hr />

            <p><strong>Domains:</strong> {(mentor.domains && mentor.domains.length) ? mentor.domains.join(", ") : "—"}</p>
            <p><strong>Bio:</strong> {mentor.bio || "No bio available."}</p>
            <p><strong>Rating:</strong> ⭐ {typeof mentor.rating === "number" ? mentor.rating : 0}</p>

            <textarea
              placeholder="Write a message to the mentor..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={textareaStyle}
            />

            <button
              style={{ ...sendButton, opacity: sending ? 0.7 : 1 }}
              onClick={handleSend}
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Request"}
            </button>
          </>
        ) : (
          <>
            <h3>No mentor selected</h3>
            <p style={{ color: "#666" }}>Close and try again.</p>
          </>
        )}
      </div>
    </div>
  );
}

// styles (same as before)
const modalBackdrop = {
  position: "fixed",
  top: 0, left: 0,
  width: "100%", height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2000
};

const modalBox = {
  background: "#fff",
  padding: "24px",
  borderRadius: "12px",
  width: "400px",
  position: "relative",
  boxShadow: "0 12px 40px rgba(2,6,23,0.25)"
};

const closeBtn = {
  position: "absolute",
  right: "12px",
  top: "12px",
  background: "none",
  border: "none",
  fontSize: "18px",
  cursor: "pointer"
};

const textareaStyle = {
  width: "100%",
  height: "90px",
  marginTop: "12px",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ddd"
};

const sendButton = {
  marginTop: "12px",
  width: "100%",
  padding: "10px",
  background: "#0ea5a4",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold"
};

