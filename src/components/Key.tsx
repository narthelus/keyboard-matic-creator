import * as React from "react";
import { FunctionComponent } from "react";
import styled from "styled-components";
import {
  GetColor,
  AdjustHSLColor,
  RGBColorToString,
  CalculateTextColor
} from "../utilities/ColorUtils";

interface Props {
  keyColor: {
    r: number;
    g: number;
    b: number;
  };
  keyText: string;
  keyWidth: number;
  rightMargin?: string;
  height?: string;
  visible: boolean;
}

const Keycap = styled.div<Props>`
  display: flex;
  cursor: pointer;
  justify-content: center;
  white-space: pre-wrap;
  visibility: ${(props) => (props.visible ? "auto" : "hidden")};
  background: ${(props) => RGBColorToString(props.keyColor)};
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  flex: 1 1 40px;
  width: ${(props) => props.keyWidth + "px"};
  height: 40px;
  color: ${(props) => CalculateTextColor(props.keyColor)};
  text-align: left;
  border: none;
  border-radius: 8px;
  box-shadow: 0 15px
    ${(props) => AdjustHSLColor(GetColor(props.keyColor), 5, -4, -6)};
  margin: 0px 2px 10px 2px;
  -ms-user-select: none;
  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;

  :hover {
    background-color: ${(props) =>
      AdjustHSLColor(GetColor(props.keyColor), 5, -10, 10)};
    box-shadow: 0 15px
      ${(props) => AdjustHSLColor(GetColor(props.keyColor), 5, -10, 5)};
    color: ${(props) => CalculateTextColor(props.keyColor)};
  }

  :active {
    background-color: ${(props) =>
      AdjustHSLColor(GetColor(props.keyColor), 5, 6, -11)};
    box-shadow: 0 5px
      ${(props) => AdjustHSLColor(GetColor(props.keyColor), 5, 10, -16)};
    transform: translateY(11px);
    color: hsl(0, 0%, 100%);
  }
`;

export const Key: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <Keycap {...props}>{props.keyText}</Keycap>
    </div>
  );
};
