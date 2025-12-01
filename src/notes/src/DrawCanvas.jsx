import { useRef, useEffect, useState, useImperativeHandle, forwardRef } from "react";

const DrawCanvas = forwardRef(({ initialImage, onImageChange }, ref) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [erase, setErase] = useState(false);

  // Expose getCanvasImage function via ref
  useImperativeHandle(ref, () => ({
    getCanvasImage: () => {
      if (!canvasRef.current) return null;
      return canvasRef.current.toDataURL("image/png");
    },
  }));

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    
    // Set actual canvas size to match display size
    const wasEmpty = canvas.width === 0 && canvas.height === 0;
    canvas.width = rect.width;
    canvas.height = rect.height;

    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 2;
    ctxRef.current = ctx;
  };

  useEffect(() => {
    resizeCanvas();
    
    const handleResize = () => {
      resizeCanvas();
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load initial image when it changes
  useEffect(() => {
    if (initialImage && canvasRef.current && ctxRef.current) {
      // Wait a bit to ensure canvas is properly sized
      setTimeout(() => {
        const img = new Image();
        img.onload = () => {
          if (canvasRef.current && ctxRef.current) {
            ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            ctxRef.current.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
          }
        };
        img.src = initialImage;
      }, 100);
    } else if (!initialImage && canvasRef.current && ctxRef.current) {
      // Clear canvas if no initial image
      ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }, [initialImage]);

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const clientX = e.clientX !== undefined ? e.clientX : (e.touches?.[0]?.clientX);
    const clientY = e.clientY !== undefined ? e.clientY : (e.touches?.[0]?.clientY);

    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    return { x, y };
  };

  const start = (e) => {
    e.preventDefault();
    setDrawing(true);
    const { x, y } = getCoordinates(e);

    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x, y);
  };

  const draw = (e) => {
    if (!drawing) return;
    e.preventDefault();

    const { x, y } = getCoordinates(e);

    ctxRef.current.strokeStyle = erase ? "#ffffff" : color;
    ctxRef.current.lineWidth = erase ? 14 : 2;
    ctxRef.current.globalCompositeOperation = erase ? "destination-out" : "source-over";

    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x, y);

    // Notify parent of image change
    if (onImageChange && canvasRef.current) {
      onImageChange(canvasRef.current.toDataURL("image/png"));
    }
  };

  const stop = (e) => {
    if (drawing) {
      e?.preventDefault();
      setDrawing(false);
      ctxRef.current.beginPath();

      // Notify parent of image change
      if (onImageChange && canvasRef.current) {
        onImageChange(canvasRef.current.toDataURL("image/png"));
      }
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
    if (onImageChange) {
      onImageChange(null);
    }
  };

  return (
    <>
      <div className="toolbar">
        <button 
          onClick={() => setErase(false)}
          style={{ background: !erase ? "#e0e7ff" : "white" }}
        >
          ✏️ Pen
        </button>
        <button 
          onClick={() => setErase(true)}
          style={{ background: erase ? "#e0e7ff" : "white" }}
        >
          🧽 Eraser
        </button>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <button onClick={clearCanvas}>🗑 Clear</button>
      </div>

      <canvas
        ref={canvasRef}
        className="notes-canvas"
        onMouseDown={start}
        onMouseMove={draw}
        onMouseUp={stop}
        onMouseLeave={stop}
        onTouchStart={start}
        onTouchMove={draw}
        onTouchEnd={stop}
      />
    </>
  );
});

DrawCanvas.displayName = "DrawCanvas";

export default DrawCanvas;
