import React from "react"
import TutorialWrapper from "./tutorial-wrapper"
import Row from "./row"
import TutorialPanel from "./tutorial-panel"
import TutorialTitle from "./tutorial-title"
import TutorialDescription from "./tutorial-description"
import TutorialButton from "./tutorial-button"

const W3Schools = () => {
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
    <div>
      <TutorialWrapper backgroundColor="#D9EEE1">
        <Row>
          <TutorialPanel>
            <TutorialTitle title="HTML" />
            <TutorialDescription content={"The language for building web pages"} />

            <TutorialButton content={"Learn HTML"} backgroundColor={"#04AA6D"} color={"white"} />
            <TutorialButton content={"Video Tutorial"} backgroundColor={"#fff080"} color={"black"} />
            <TutorialButton content={"HTML Reference"} backgroundColor={"black"} color={"white"} />
            <TutorialButton content={"Get Certificate"} backgroundColor={"#ffb3bb"} color={"black"} />

          </TutorialPanel>
          <TutorialPanel>
            <div
              style={{
                backgroundColor: "#E7E9EB",
                color: "black",
                padding: "16px",
                boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
              }}
            >
              <h3 style={{ fontSize: "24px", margin: "10px 0", lineHeight: "36px" }}>
                HTML Example
              </h3>
              <div
                style={{
                  minHeight: "200px",
                  fontFamily: "consolas",
                  backgroundColor: "white",
                  borderLeft: "4px solid #04AA6D",
                  padding: "8px 12px",
                }}
              >
                code
              </div>
            </div>
          </TutorialPanel>
        </Row>
      </TutorialWrapper>

      <TutorialWrapper backgroundColor="#FFF4A3">
        <Row>
          <TutorialPanel>
          <TutorialTitle title="CSS" />
            <TutorialDescription content={"The language for building web pages"} />

            <TutorialButton content={"CSS HTML"} backgroundColor={"#04AA6D"} color={"white"} />
            <TutorialButton content={"CSS Reference"} backgroundColor={"black"} color={"white"} />
            <TutorialButton content={"Get Certificate"} backgroundColor={"#ffb3bb"} color={"black"} />

          </TutorialPanel>
          <TutorialPanel>
            <div
              style={{
                backgroundColor: "#E7E9EB",
                color: "black",
                padding: "16px",
                boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
              }}
            >
              <h3 style={{ fontSize: "24px", margin: "10px 0", lineHeight: "36px" }}>
                CSS Example
              </h3>
              <div
                style={{
                  minHeight: "200px",
                  fontFamily: "consolas",
                  backgroundColor: "white",
                  borderLeft: "4px solid #04AA6D",
                  padding: "8px 12px",
                }}
              >
                code
              </div>
            </div>
          </TutorialPanel>
        </Row>
      </TutorialWrapper>
    </div>
  )
}

export default W3Schools
