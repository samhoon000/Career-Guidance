import { useState, useRef, useEffect } from "react";
import NotesPanel from "./NotesPanel.jsx";
import AiPanel from "./AiPanel.jsx";

export default function FloatingAssistant() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showAi, setShowAi] = useState(false);

  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 20, y: 20 });
  
  const dragState = useRef({
    isActive: false,
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
    hasMoved: false,
    button: null
  });

  const handlePointerDown = (e) => {
    // Only handle left mouse button (button 0) or primary pointer
    if (e.button !== 0 && e.button !== undefined) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;

    dragState.current = {
      isActive: true,
      startX,
      startY,
      offsetX: startX - pos.x,
      offsetY: startY - pos.y,
      hasMoved: false,
      button: e.button
    };

    setDragging(true);
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!dragState.current.isActive) return;

      const currentX = e.clientX;
      const currentY = e.clientY;
      const { startX, startY, offsetX, offsetY } = dragState.current;

      // Calculate movement distance
      const deltaX = Math.abs(currentX - startX);
      const deltaY = Math.abs(currentY - startY);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // If moved more than 5px, treat as drag
      if (distance > 5) {
        dragState.current.hasMoved = true;
        
        // Update position immediately
        const newX = currentX - offsetX;
        const newY = currentY - offsetY;
        
        // Keep within viewport bounds
        const maxX = window.innerWidth - 50;
        const maxY = window.innerHeight - 50;
        
        setPos({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY))
        });
      }
    };

    const handlePointerUp = (e) => {
      if (!dragState.current.isActive) return;

      const { hasMoved, button } = dragState.current;
      const wasActive = dragState.current.isActive;

      // Reset drag state
      dragState.current.isActive = false;
      setDragging(false);

      // Remove global cursor style
      document.body.style.cursor = "";

      // Only treat as click if:
      // 1. It was a left button (button 0) or primary pointer
      // 2. Movement was less than 5px
      // 3. It was actually a pointer interaction
      if (wasActive && !hasMoved && (button === 0 || button === undefined)) {
        setOpenMenu(prev => !prev);
      }

      dragState.current.hasMoved = false;
    };

    if (dragging) {
      // Set global cursor to grabbing while dragging
      document.body.style.cursor = "grabbing";
      
      window.addEventListener("pointermove", handlePointerMove, { passive: false });
      window.addEventListener("pointerup", handlePointerUp);
      window.addEventListener("pointercancel", handlePointerUp);
    }

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [dragging]);

  return (
    <>
      <div
        className={`floating-btn ${dragging ? "dragging" : ""}`}
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        onPointerDown={handlePointerDown}
      >
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      {openMenu && (
        <div 
          className="extension-bar"
          style={{ left: `${pos.x}px`, top: `${pos.y + 60}px` }}
        >
          <div 
            className="extension-option" 
            onClick={() => { 
              setShowNotes(true); 
              setShowAi(false); 
              setOpenMenu(false); 
            }}
          >
              Notes
          </div>
          <div 
            className="extension-option" 
            onClick={() => { 
              setShowAi(true); 
              setShowNotes(false); 
              setOpenMenu(false); 
            }}
          >
              AI Assistant
          </div>
        </div>
      )}

      {showNotes && <NotesPanel onClose={() => setShowNotes(false)} />}
      {showAi && <AiPanel onClose={() => setShowAi(false)} />}
    </>
  );
}

