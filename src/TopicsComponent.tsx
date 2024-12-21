import React from "react";
import "./App.css"; // Optional for styling


const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };
  
  const sectionStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  };
  
  const headingStyle = {
    fontSize: "18px",
    color: "#333",
  };
  
  const codeStyle = {
    fontFamily: "monospace",
    color: "#555",
  };


const PrimitiveTypes = () => {
  const name: string = "Malahima";
  const age: number = 17;
  const isStudent: boolean = true;

  return (
    <div style={sectionStyle}>
      <h3 style={headingStyle}>Primitive Types</h3>
      <p>Name: <span style={codeStyle}>{name}</span></p>
      <p>Age: <span style={codeStyle}>{age}</span></p>
      <p>Is Student: <span style={codeStyle}>{isStudent ? "Yes" : "No"}</span></p>
    </div>
  );
};

const SpecialTypes = () => {
  let anything: any = "This can be anything!";
  let unknownValue: unknown = 42;
  let unused: void = undefined;

  return (
    <div style={sectionStyle}>
      <h3 style={headingStyle}>Special Types</h3>
      <p>Any: <span style={codeStyle}>{anything}</span></p>
      <p>Unknown: <span style={codeStyle}>{String(unknownValue)}</span></p>
      <p>Void: <span style={codeStyle}>{unused !== undefined ? String(unused) : "No value"}</span></p>


    </div>
  );
};

const TypeAssertions = () => {
  let value: unknown = "Hello, TypeScript!";
  let assertedString = value as string;

  return (
    <div style={sectionStyle}>
      <h3 style={headingStyle}>Type Assertions</h3>
      <p>Original (unknown): <span style={codeStyle}>{String(value)}</span></p>

      <p>After Assertion: <span style={codeStyle}>{assertedString.toUpperCase()}</span></p>
    </div>
  );
};

const LiteralTypes = () => {
  type Status = "active" | "inactive" | "banned";
  const userStatus: Status = "active";

  return (
    <div style={sectionStyle}>
      <h3 style={headingStyle}>Literal Types</h3>
      <p>User Status: <span style={codeStyle}>{userStatus}</span></p>
    </div>
  );
};

// Main Component
const TopicsComponent = () => {
  return (
    <div style={containerStyle}>
      <h2>TypeScript Topics</h2>
      <PrimitiveTypes />
      <SpecialTypes />
      <TypeAssertions />
      <LiteralTypes />
    </div>
  );
};

export default TopicsComponent;
