import React, { useState } from "react"

const sample1ClickHandler = (e) => {
  alert("Click handler by global function")
  console.log(e)
}

export const UsingState = () => {
  const sample2ClickHandler = (e) => {
    alert("Click handler by nested function")
    console.log(e)
  }

  /***********/

  let counter = 0
  /**
   * const [state, setState] = useState(initialValue)
   *
   * <component>{state}</component>
   *
   * event() {
   *   setState(newValue)
   * }
   */

  const [counterState, setCounterState] = useState(0)

  const incrementHandler = () => {
    counter++
    // console.log(counter)
    setCounterState(counterState + 1)
  }
  const decrementHandler = () => {
    counter--
    // console.log(counter)
    setCounterState(counterState - 1)
  }

  return (
    <div>
      <h2>Events in React</h2>
      <button onClick={sample1ClickHandler}>Sample 1</button>
      <button onClick={sample2ClickHandler}>Sample 2</button>
      <button
        onClick={(e) => {
          alert("Click handler by anonymous function")
          console.log(e)
        }}
      >
        Sample 3
      </button>
      <hr />
      <h2>State in React</h2>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <p>Counter: {counter}</p>
      <p>Counter: {counterState}</p>
    </div>
  )
}
