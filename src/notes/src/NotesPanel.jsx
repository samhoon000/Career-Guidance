import React, { useState, useEffect, useRef } from "react";
import DrawCanvas from "./DrawCanvas.jsx";

const STORAGE_KEY = "drawing_notes_v1";

function NotesPanel({ onClose }) {
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  // Last persisted title/content (for bookkeeping)
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContent, setCurrentContent] = useState("");
  const [canvasImage, setCanvasImage] = useState(null);
  const [liveTitle, setLiveTitle] = useState("");
  const [liveContent, setLiveContent] = useState("");
  const canvasRef = useRef(null);
  const titleInputRef = useRef(null);
  const contentTextareaRef = useRef(null);
  const saveTimerRef = useRef(null);

  // Load notes from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setNotes(parsed);
        if (parsed.length > 0 && !selectedNoteId) {
          setSelectedNoteId(parsed[0].id);
          setCurrentTitle(parsed[0].title || "");
          setCurrentContent(parsed[0].content || "");
          setLiveTitle(parsed[0].title || "");
          setLiveContent(parsed[0].content || "");
          setCanvasImage(parsed[0].canvasImage || null);
        }
      } catch (err) {
        console.error("Failed to load notes:", err);
      }
    }
  }, []);

  // Load selected note data (only when selection changes)
  useEffect(() => {
    if (!selectedNoteId) return;
    const note = notes.find((n) => n.id === selectedNoteId);
    if (note) {
      const title = note.title || "";
      const content = note.content || "";
      setCurrentTitle(title);
      setCurrentContent(content);
      setLiveTitle(title);
      setLiveContent(content);
      setCanvasImage(note.canvasImage || null);
    }
  }, [selectedNoteId]); // deliberately not depending on `notes` to avoid overwriting while typing

  // Clear pending save timer on unmount
  useEffect(() => {
    return () => {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
      }
    };
  }, []);

  // Save notes to localStorage
  const saveNotes = (updatedNotes) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
    } catch (err) {
      console.error("Failed to save notes:", err);
    }
  };

  // Save current note using the latest live title/content
  const saveCurrentNote = () => {
    if (!selectedNoteId) return;

    // Get canvas image from ref if available, otherwise use state
    let canvasImg = canvasImage;
    if (canvasRef.current && typeof canvasRef.current.getCanvasImage === 'function') {
      canvasImg = canvasRef.current.getCanvasImage();
    }
    
    const updatedNotes = notes.map((note) =>
      note.id === selectedNoteId
        ? {
            ...note,
            title: liveTitle,
            content: liveContent,
            canvasImage: canvasImg,
            updatedAt: new Date().toISOString(),
          }
        : note
    );
    setCurrentTitle(liveTitle);
    setCurrentContent(liveContent);
    saveNotes(updatedNotes);
  };

  // Handle note selection
  const handleSelectNote = (noteId) => {
    saveCurrentNote();
    setSelectedNoteId(noteId);
  };

  // Handle create note
  const handleCreateNote = () => {
    setIsCreating(true);
    setNewNoteTitle("");
    setTimeout(() => titleInputRef.current?.focus(), 100);
  };

  // Handle create note confirm
  const handleCreateConfirm = () => {
    if (!newNoteTitle.trim()) {
      setIsCreating(false);
      return;
    }

    const newNote = {
      id: Date.now().toString(),
      title: newNoteTitle.trim(),
      content: "",
      canvasImage: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedNotes = [newNote, ...notes];
    saveNotes(updatedNotes);
    setSelectedNoteId(newNote.id);
    setCurrentTitle(newNote.title);
    setCurrentContent("");
    setCanvasImage(null);
    setIsCreating(false);
    setNewNoteTitle("");

    // Focus content textarea
    setTimeout(() => contentTextareaRef.current?.focus(), 100);
  };

  // Handle create note cancel
  const handleCreateCancel = () => {
    setIsCreating(false);
    setNewNoteTitle("");
  };

  // Handle delete note
  const handleDeleteNote = (noteId, e) => {
    e.stopPropagation();
    if (window.confirm("Delete this note?")) {
      const updatedNotes = notes.filter((n) => n.id !== noteId);
      saveNotes(updatedNotes);
      if (selectedNoteId === noteId) {
        if (updatedNotes.length > 0) {
          setSelectedNoteId(updatedNotes[0].id);
        } else {
          setSelectedNoteId(null);
          setCurrentTitle("");
          setCurrentContent("");
          setCanvasImage(null);
        }
      }
    }
  };

  // Handle panel close - save before closing
  const handleClose = () => {
    saveCurrentNote();
    onClose();
  };

  // Format timestamp
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const selectedNote = notes.find((n) => n.id === selectedNoteId);

  return (
    <div className="notes-panel">
      <div className="notes-panel-header">
        <h3>Notes</h3>
        <button onClick={handleClose}>✖</button>
      </div>

      <div className="notes-panel-content">
        {/* Left: Notes List */}
        <div className="notes-list">
          <button className="notes-create-btn" onClick={handleCreateNote}>
            <span>➕</span> Create Note
          </button>

          {isCreating && (
            <div className="notes-create-form">
              <input
                ref={titleInputRef}
                type="text"
                placeholder="Note title..."
                value={newNoteTitle}
                onChange={(e) => setNewNoteTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCreateConfirm();
                  if (e.key === "Escape") handleCreateCancel();
                }}
                autoFocus
              />
              <div className="notes-create-actions">
                <button onClick={handleCreateConfirm}>OK</button>
                <button onClick={handleCreateCancel}>Cancel</button>
              </div>
            </div>
          )}

          <div className="notes-list-scroll">
            {notes.length === 0 ? (
              <div className="notes-empty">No notes yet</div>
            ) : (
              notes.map((note) => (
                <div
                  key={note.id}
                  className={`notes-list-item ${
                    selectedNoteId === note.id ? "selected" : ""
                  }`}
                  onClick={() => handleSelectNote(note.id)}
                >
                  <div className="notes-list-item-header">
                    <div className="notes-list-item-title">
                      {note.title || "Untitled"}
                    </div>
                    <button
                      className="notes-list-item-delete"
                      onClick={(e) => handleDeleteNote(note.id, e)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="notes-list-item-time">
                    {formatTime(note.updatedAt || note.createdAt)}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right: Editor */}
        <div className="notes-editor">
          {selectedNote ? (
            <>
              <input
                className="notes-title-input"
                type="text"
                placeholder="Note title..."
                value={liveTitle}
                onChange={(e) => {
                  const next = e.target.value;
                  setLiveTitle(next);

                  // Debounce save to avoid frequent re-renders/localStorage writes
                  if (saveTimerRef.current) {
                    clearTimeout(saveTimerRef.current);
                  }
                  saveTimerRef.current = setTimeout(() => {
                    saveCurrentNote();
                  }, 150);
                }}
              />

              <textarea
                ref={contentTextareaRef}
                className="notes-textarea"
                placeholder="Start writing..."
                value={liveContent}
                onChange={(e) => {
                  const next = e.target.value;

                  // Use rAF for smoother UI updates while typing
                  if (typeof window !== "undefined" && window.requestAnimationFrame) {
                    window.requestAnimationFrame(() => {
                      setLiveContent(next);
                    });
                  } else {
                    setLiveContent(next);
                  }

                  // Debounce save and main content state updates
                  if (saveTimerRef.current) {
                    clearTimeout(saveTimerRef.current);
                  }
                  saveTimerRef.current = setTimeout(() => {
                    saveCurrentNote();
                  }, 150);
                }}
              />

              <DrawCanvas
                ref={canvasRef}
                initialImage={canvasImage}
                onImageChange={(img) => {
                  setCanvasImage(img);
                  // Update note with new canvas image
                  if (selectedNoteId) {
                    const updatedNotes = notes.map((note) =>
                      note.id === selectedNoteId
                        ? {
                            ...note,
                            canvasImage: img,
                            updatedAt: new Date().toISOString(),
                          }
                        : note
                    );
                    saveNotes(updatedNotes);
                  }
                }}
              />
            </>
          ) : (
            <div className="notes-editor-empty">
              <p>Select a note or create a new one to start</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(NotesPanel);
