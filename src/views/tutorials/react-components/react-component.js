import { Component1 } from "./function-components"
import { Component2 } from "./function-components"
import { Component3 } from "./function-components"
import { Component4 } from "./function-components"
import React from "react"

export const ReactComponent = () => {
  // console.log(modules)
  // console.log(Component1())
  const cmp = Component1()
  return (
    <>
      {cmp}

      {Component1()}

      <Component1 />

      {Component2({
        title: "React Component (call function)",
        message: "how to use props in react component",
      })}

      <Component2 message="how to use props in react component" title="React Component (JSX)" />

      <Component3
        title="React Component (Destructuring)"
        message="how to use props in react component"
      />

      <Component4
        title="React Component (children)"
        message="how to use content (no content) in react component"
      />

      <Component4
        title="React Component (children)"
        message="how to use content (text) in react component"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt esse molestiae neque
        cumque, sit magni! Perferendis explicabo quis modi obcaecati! Obcaecati blanditiis adipisci
        molestiae tempora facere, accusantium sequi aliquam est!
      </Component4>

      <Component4
        title="React Component (children)"
        message="how to use content (tag) in react component"
      >
        <p>
          You can now optionally start a new app from a template by appending --template
          [template-name] to the creation command.
        </p>
      </Component4>

      <Component4
        title="React Component (children)"
        message="how to use content (tag) in react component"
      >
        <h3>Selecting a template</h3>
        <p>
          You can now optionally start a new app from a template by appending --template
          [template-name] to the creation command.
        </p>
        <p>If you don't select a template, we'll create your project with our base template.</p>
      </Component4>
      <Component4
        title="React Component (children)"
        message="how to use content (tag) in react component"
      >
        <Component1 />
      </Component4>
    </>
  )
}
