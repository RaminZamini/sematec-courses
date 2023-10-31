/**
 * function Component() {
 *   body
 *   return JSX
 * }
 *
 * const Component = function() {
 *   body
 *   return JSX
 * }
 *
 * const Component = () => {
 *   body
 *   return JSX
 * }
 *
 */

const componentStyle = {
  padding: "40px",
  backgroundColor: "#eee",
  textAlign: "center",
  marginBottom: "10px",
}

export const Component1 = () => {
  return <div style={componentStyle}>Hello react Component</div>
}

export const Component2 = (props) => {
  // console.log(props)
  return (
    <div style={componentStyle}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  )
}

export const Component3 = ({ title, message }) => {
  // const {title, message} = props
  return (
    <div style={componentStyle}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  )
}

export const Component4 = ({ title, message, children}) => {
  // console.log(props)
  console.log(children)
  return (
    <div style={componentStyle}>
      <h2>{title}</h2>
      <p>{message}</p>
      <hr />
      {children}
    </div>
  )
}