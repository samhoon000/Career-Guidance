import React from "react";
import { useNavigate } from "react-router-dom";

export const CompletionButton = ({ roundId }: { roundId: string }) => {
  const navigate = useNavigate();

  const [done, setDone] = React.useState<boolean>(() => {
    return localStorage.getItem(`round_${roundId}_done`) === "true";
  });

  const handleClick = () => {
    const newStatus = !done;
    setDone(newStatus);
    localStorage.setItem(`round_${roundId}_done`, String(newStatus));

    // Redirect ONLY when marking as completed
    if (newStatus === true) {
      setTimeout(() => {
        navigate("/interview/data-analyst");   // Redirect to Interview Home
      }, 400);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 border rounded text-sm font-medium"
    >
      {done ? "Completed ✓" : "Mark as Completed"}
    </button>
  );
};
