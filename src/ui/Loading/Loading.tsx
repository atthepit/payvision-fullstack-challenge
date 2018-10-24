import React from "react";
import { css } from "emotion";
import logo from "./logo.png";
import spinner from "./spinner.svg";
import colors from "../colors";

const center = css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const container = css`
  ${center};
  width: 100%;
  height: 70vh;
`;

const loading = css`
  ${center};

  background-color: ${colors.white};
  padding: 5%;
  border-radius: 2%;

  img {
    display: block;
    margin: 3%;
  }
`;

class Loading extends React.Component {
  public render() {
    return (
      <div className={container}>
        <div className={loading}>
          <img src={logo} alt="Payvision" />
          <img src={spinner} alt="" />
        </div>
      </div>
    );
  }
}

export default Loading;
