import * as React from "react";
import { FunctionComponent } from "react";
import { useState } from "react";
import { PhotoshopPicker } from "react-color";
import Github from "react-color/lib/components/github/Github";
import styled, { StyledComponent } from "styled-components";
import {
  AdjustHSLColor,
  CalculateTextColor,
  GetColor,
  RGBColorToString
} from "../utilities/ColorUtils";

interface Props {
  target: string;
  text?: string;
  color?: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
  keyColor: {
    r: number;
    g: number;
    b: number;
  };
  plateColor: {
    r: number;
    g: number;
    b: number;
  };
  UpdateKeyColor: (r: number, g: number, b: number) => void;
  UpdatePlateColor: (r: number, g: number, b: number) => void;
}
/* 
const Color = styled.div<{ color }>`
  display: table;
  width: 200px;
  height: 30px;
  vertical-align: middle;
  margin: 25px 0px 0px 0px;
  border-radius: 2px;
  background: rgba(
    ${(props) => props.color.r},
    ${(props) => props.color.g},
    ${(props) => props.color.b},
    ${(props) => props.color.a}
  );
`; */

const ColorPickButton: StyledComponent<any, any> = styled.div<Props>`
  margin: 20px auto auto auto;
  width: auto;
  padding: 15px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
  cursor: pointer;
  border-radius: 8px;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  color: ${(props) => RGBColorToString(props.keyColor)};
  background: ${(props) => RGBColorToString(props.plateColor)};
  box-shadow: 0 9px
    ${(props) => AdjustHSLColor(GetColor(props.plateColor), 5, -4, -6)};
  -ms-user-select: none;
  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;

  :hover {
    background-color: ${(props) =>
      AdjustHSLColor(GetColor(props.plateColor), 5, -10, 10)};
    box-shadow: 0 9px
      ${(props) => AdjustHSLColor(GetColor(props.plateColor), 5, -10, 5)};
    color: ${(props) => CalculateTextColor(props.plateColor)};
  }

  :active {
    background-color: ${(props) =>
      AdjustHSLColor(GetColor(props.plateColor), 5, 6, -11)};
    box-shadow: 0 5px
      ${(props) => AdjustHSLColor(GetColor(props.plateColor), 5, 10, -16)};
    transform: translateY(7px);
    color: hsl(0, 0%, 100%);
  }
`;

const Popover = styled.div`
  display: absolute;
  z-index: 2;
  margin: 20px 0px 0px 0px;
`;

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export const ColorSelector: FunctionComponent<Props> = (props) => {
  const [colorPicker, useColorPicker] = useState({
    displayColorPicker: false,
    color: {
      r: 241,
      g: 112,
      b: 19,
      a: 1
    }
  });

  const HandleClick = () => {
    useColorPicker({
      displayColorPicker: !colorPicker.displayColorPicker,
      color: colorPicker.color
    });
  };

  const HandleClose = () => {
    useColorPicker({
      displayColorPicker: false,
      color: colorPicker.color
    });
    if (props.target === "Keys") {
      props.UpdateKeyColor(
        colorPicker.color.r,
        colorPicker.color.g,
        colorPicker.color.b
      );
    } else if (props.target === "Plate") {
      props.UpdatePlateColor(
        colorPicker.color.r,
        colorPicker.color.g,
        colorPicker.color.b
      );
    }
  };

  const HandleChange = (color, event) => {
    useColorPicker({
      displayColorPicker: !colorPicker.displayColorPicker,
      color: color.rgb
    });
    if (props.target === "Keys") {
      props.UpdateKeyColor(color.rgb.r, color.rgb.g, color.rgb.b);
    } else if (props.target === "Plate") {
      props.UpdatePlateColor(color.rgb.r, color.rgb.g, color.rgb.b);
    }
  };

  return (
    <div>
      <ColorPickButton {...props} onClick={HandleClick}>
        {props.text}
      </ColorPickButton>
      {colorPicker.displayColorPicker ? (
        <Popover>
          {/* <Cover onClick={HandleClose} /> */}
          <Github color={colorPicker.color} onChange={HandleChange} />
        </Popover>
      ) : null}
    </div>
  );
};
