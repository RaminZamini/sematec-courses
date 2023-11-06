import React from "react"

const TutorialWrapper = ({ backgroundColor = "#f1f1f1", color = "black", children }) => {
  return (
    <div style={{ padding: "50px", backgroundColor: backgroundColor, color: color }}>
      {children}
    </div>
  )
}

export default TutorialWrapper
