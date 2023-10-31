import React, { useState } from "react"
import SampleComponent from "./sample-component"

const FCLifecycle = () => {
  const [isHide, setIsHide] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState("Some message")
  const toggleDisplayHandler = () => {
    setIsHide(!isHide)
  }

  const toggleVisibleHandler = () => {
    setIsVisible(!isVisible)
  }
  const addMessageHandler = () => {
    setMessage(message + ", Added new message")
  }
  
  return (
    <div>
      <h2>Fuction Component Lifecycle</h2>
      <button onClick={toggleDisplayHandler}>
        Toggle show (display) <strong>Wrong way</strong>{" "}
      </button>
      <button onClick={toggleVisibleHandler}>Toggle Show</button>
      <button onClick={addMessageHandler}>Add Message</button>
      <div
        style={{ padding: "20px", backgroundColor: "lightgreen", display: isHide ? "none" : null }}
      >
        {/* راه آماتور */}
        {/* {isVisible ? <SampleComponent /> : null} */}

        {/* راه حرفه ای */}
        {isVisible && <SampleComponent message={message} />}
      </div>
    </div>
  )
}

export default FCLifecycle
