import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</h2>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#333" : "#fff",
          color: theme === "light" ? "#fff" : "#333",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
