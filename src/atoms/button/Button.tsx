import React from "react";
import styled, { css } from "styled-components";

import colorSet from "../../styles/colorSet";

export enum ButtonVariant {
  outlined = "outlined",
  contained = "contained",
  grey = "grey",
  navbar = "navbar",
  navbarChild = "navbarChild",
  taskItem = "taskItem",
  x = "x",
  o = "o",
}

interface ButtonProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  border?: React.CSSProperties["border"];
  borderRadius?: React.CSSProperties["borderRadius"];
  disabled?: boolean;
  variant?: ButtonVariant;
  animated?: boolean;
}

const Button = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : undefined)};
  height: ${({ height }) => (height ? height : undefined)};
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  transition: 0.1s;
  line-height: 0;
  color: inherit;

  ${({ variant }) => {
    if (variant) {
      return css`
        border-radius: 5px;
        padding: 10px 20px;
      `;
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case ButtonVariant.outlined:
        return css`
          border: 1px solid ${colorSet.primary};
          color: ${colorSet.primary};

          :hover {
            background-color: ${colorSet.secondary};
          }
        `;
      case ButtonVariant.contained:
        return css`
          background-color: ${colorSet.primary};
          color: ${colorSet.colorless};
          border-radius: 25px;
          position: absolute;
          left: 50%;
          transform: translate(-50%);
          bottom: 70px;
          :hover {
            box-shadow: inset rgba(0, 0, 0, 0.15) 0px 0px 0px 40px;
          }
          justify-content: center;
        `;

      case ButtonVariant.o:
        return css`
          background-color: ${colorSet.primary};
          color: ${colorSet.colorless};
          border-radius: 25px;
          position: absolute;

          bottom: 70px;
          transform: translate(5%);

          :hover {
            box-shadow: inset rgba(0, 0, 0, 0.15) 0px 0px 0px 40px;
          }
        `;
      case ButtonVariant.x:
        return css`
          background-color: ${colorSet.deselected};
          color: ${colorSet.colorless};
          border-radius: 25px;
          position: absolute;

          bottom: 70px;
          transform: translate(130%);

          :hover {
            box-shadow: inset rgba(0, 0, 0, 0.15) 0px 0px 0px 40px;
          }
        `;
      case ButtonVariant.navbar:
        return css`
          :hover {
            box-shadow: inset rgba(0, 0, 0, 0.15) 0px 0px 0px 40px;
          }
        `;
      case ButtonVariant.navbarChild:
        return css`
          background: gray;
          :hover {
            box-shadow: inset rgba(0, 0, 0, 0.15) 0px 0px 0px 40px;
          }
        `;
      case ButtonVariant.taskItem:
        return css`
          border: 1px solid ${colorSet.outlines};
          color: ${colorSet.colorless};

          :hover {
            box-shadow: inset rgba(0, 0, 0, 0.15) 0px 0px 0px 40px;
            border: 1px solid ${colorSet.outlines};
          }
        `;
    }
  }}
  ${({ border }) => css`
    border: ${border};
  `}
  ${({ borderRadius }) => css`
    border-radius: ${borderRadius};
  `}
  :hover {
    cursor: pointer;
  }

  ${({ animated }) =>
    animated &&
    css`
      &:active {
        transform: scale(0.95);
      }
    `}
`;

export default Button;
