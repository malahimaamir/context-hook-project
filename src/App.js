import React, { useState, useRef, useMemo } from "react";

const SearchFilterApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page
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

  // Memoized filtered list
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Get current items for pagination
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems.slice(startIndex, endIndex);
  }, [filteredItems, currentPage, itemsPerPage]);

  // Focus input field using useRef
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Total pages for pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Search Filter with Pagination</h2>
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
        {currentItems.length ? (
          currentItems.map((item, index) => (
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

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={{
            padding: "5px 10px",
            marginRight: "5px",
            backgroundColor: currentPage === 1 ? "#ccc" : "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          style={{
            padding: "5px 10px",
            marginLeft: "5px",
            backgroundColor: currentPage === totalPages ? "#ccc" : "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchFilterApp;
