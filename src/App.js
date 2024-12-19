import React, { useState, useRef, useMemo } from "react";

const SearchFilterApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  // Sample list of items
  const items = [
    "React",
    "JavaScript",
    "Node.js",
    "Python",
    "TypeScript",
    "HTML",
    "CSS",
    "GraphQL",
  ];

  // Memoized filtered list to avoid unnecessary re-renders
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Focus input field using useRef
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Search Filter with useRef and useMemo</h2>
      <button
        onClick={focusInput}
        style={{
          marginBottom: "10px",
          padding: "5px 10px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Focus Search Input
      </button>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredItems.length ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                backgroundColor: "#f9f9f9",
                marginBottom: "5px",
                borderRadius: "5px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              {item}
            </li>
          ))
        ) : (
          <p>No matching items found.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchFilterApp;