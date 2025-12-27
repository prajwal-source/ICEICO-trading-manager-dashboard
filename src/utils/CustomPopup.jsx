import { useState, useRef } from "react";
import ReactDOM from "react-dom";

const CustomPopup = ({
  isOpen,
  onClose,
  children,
  width = "300px",
  position = "center",
  dragHandleSelector,   // 
  backdrop = true,      //
  backdropClass = "", // 
}) => {
  const popupRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  if (!isOpen) return null;

  const wrapperClass =
    position === "center"
      ? "items-center justify-center"
      : "items-start justify-start";

  const popupStyle =
    typeof position === "object"
      ? {
        position: "absolute",
        top: position.top,
        left: position.left,
        right: position.right,
        bottom: position.bottom,
        width,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }
      : {
        width,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      };

  const startDrag = (e) => {
    if (!dragHandleSelector) return;

    const handle = e.target.closest(dragHandleSelector);
    if (!handle) return;

    setDragging(true);
    popupRef.current.startX = e.clientX - offset.x;
    popupRef.current.startY = e.clientY - offset.y;
  };

  const onMouseMove = (e) => {
    if (!dragging) return;
    setOffset({
      x: e.clientX - popupRef.current.startX,
      y: e.clientY - popupRef.current.startY,
    });
  };

  const stopDrag = () => setDragging(false);

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex ${wrapperClass}`}
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseDown={startDrag}
    >
      {/* Backdrop */}
      {backdrop && (
        <div
          className={`absolute inset-0 ${backdropClass}`}
          onClick={onClose}
        />
      )}

      {/* Popup */}
      <div
        ref={popupRef}
        style={popupStyle}
        className="relative z-10"
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default CustomPopup;
