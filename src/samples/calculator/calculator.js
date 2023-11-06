import React, { useState } from "react"
import BasePage from "../../layout/base-page"
import {CalFrame, CalScreen, CalButtonBox, CalButton } from '../../components'
const Calculator = () => {
  return (
    <BasePage title={"Teachers"} description="show teachers">
    <CalFrame>
    <CalScreen value="0" />
    <CalButtonBox>
       <CalButton
       className=""
          value="0"
          onClick={() => {
            console.log("Button clicked!");
          }}
        />
        <CalButton /> 
        <CalButtonBox />
    </CalButtonBox>
    </CalFrame>
   </BasePage>
  )
}

export default Calculator