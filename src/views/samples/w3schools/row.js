import React from "react"

const Row = ({ children }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>{children}</div>
  )
}

export default Row
