import React, { FunctionComponent } from "react";
import { css } from "@emotion/react";

const Main: FunctionComponent = () => {
  const titleStyled = (text: string) => {
    let indexOfFirst = text.indexOf(" ");
    let firstWord = text.slice(0, indexOfFirst);
    let lastWords = text.slice(indexOfFirst + 1);
    return (
      <>
        <span className="firstWord">{firstWord}</span>
        {" " + lastWords}
      </>
    );
  };

  return (
    <div css={styles.main} id="main">
      <div className="content max w1260 t-center mobil_padding">
        {/* <Logo /> */}
        <h1 id="main_title">{titleStyled("Hello, this is Emre")}</h1>
        <div className="short_bio">I am an open-minded developer.</div>
      </div>
    </div>
  );
};

export default Main;

const styles = {
  main: css`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: var(--backgroundcolor2);
    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h1 {
        font-weight: 700;
        letter-spacing: 3px;
        .firstWord {
          background-image: -webkit-linear-gradient(270deg, #7b6be8, #fff);
          background-clip: text;
          text-fill-color: transparent;
          letter-spacing: 3px;
          animation: hue 3s infinite linear;
          @media only screen and (max-width: 480px) {
            position: relative;
            display: inline-block;
            width: 100%;
            text-align: left;
          }
        }
        @media only screen and (max-width: 480px) {
          width: 100%;
          text-align: left;
        }
        @keyframes hue {
          from {
            filter: hue-rotate(0deg);
          }
          to {
            filter: hue-rotate(360deg);
          }
        }
      }
      .short_bio {
        margin: 40px auto 0;
        font-size: 46px;
        line-height: 46px;
        font-weight: 700;
        padding-bottom: 5px;
        color: silver;
        background-image: -webkit-linear-gradient(270deg, #fff, #6e6e73);
        background-clip: text;
        text-fill-color: transparent;
        animation: invert 5s linear;
        *animation-direction: alternate;
        @media only screen and (max-width: 480px) {
          margin: 20px auto 0;
          line-height: 42px;
          text-align: left;
          font-size: 28px;
        }
      }
      @keyframes invert {
        from {
          filter: invert(100%);
        }
        to {
          filter: invert(0%);
        }
      }
    }

    h3 {
      color: linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(29, 29, 31, 1) 100%
      );
    }
  `,
};
