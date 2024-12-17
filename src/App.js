import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

// A component that uses the theme
const MainApp = () => {
  const { theme } = useTheme();

  const appStyles = {
    minHeight: "100vh",
    backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
    color: theme === "light" ? "#333" : "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={appStyles}>
      <h1>React Context Hook Project</h1>
      <p>Toggle between Light and Dark mode using the button below:</p>
      <ThemeToggle />
    </div>
  );
};

export default App;
