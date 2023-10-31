import React from "react"

const TutorialButton = ({ content, backgroundColor, color }) => {
  const buttonStyle = {
    display: "block",
    margin: "10px auto",
    border: "none",
    borderRadius: "200px",
    padding: "8px 20px",
    width: "200px",
    cursor: "pointer",
    fontSize: "16px",
  }
  return (
    <button style={{ ...buttonStyle, backgroundColor: backgroundColor, color: color }}>
      {content}
    </button>
  )
}

export default TutorialButton
