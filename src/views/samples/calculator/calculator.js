import React, { useState } from "react"
import BasePage from "../../../layout/base-page"
import {CalFrame, CalScreen, CalButtonBox, CalButton } from '../../../components'

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
const Calculator = () => {
  return (
    <BasePage title={"Teachers"} description="show teachers">
    <CalFrame>
    <CalScreen value="0" />
    <CalButtonBox>
    {
          btnValues.flat().map((btn, i) => {
            return (
       <CalButton
          key={i}
          className={btn === "=" ? "equals" : ""}
          value={btn}
          onClick={() => {
          console.log(`${btn} clicked!`);
                }}
              />
            );
          })
    }
    </CalButtonBox>
    </CalFrame>
   </BasePage>
  )
}

export default Calculator