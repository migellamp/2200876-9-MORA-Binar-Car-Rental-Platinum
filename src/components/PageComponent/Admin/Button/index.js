import React from "react";
import "./style.css";
export default function Button({ title, outline, onClick }) {
  return (
    <button
      style={{
        backgroundColor: outline ? "" : "#0D28A6",
        color: outline ? "#0D28A6" : "white",
      }}
      onClick={onClick}
      type="button"
      className={
        outline ? "btn btn-outline-primary px-5" : "btn btn-primary px-5"
      }
    >
      {title}
    </button>
  );
}
