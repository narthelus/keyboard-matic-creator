import * as React from "react";
import { FunctionComponent } from "react";
import styled, { CSSProperties } from "styled-components";
import { Board } from "./Board";
import { KeyboardCustomizer } from "./KeyboardCustomizer";
import { useState } from "react";
import {
  AdjustHSLColor,
  CalculateTextColor,
  GetColor,
  RGBColorToString
} from "../utilities/ColorUtils";

interface Props {
  id: string;
  name: string;
  RemoveKeyboard: (id: string) => void;
}

const KeyboardBackground = styled.div`
  background: #d9c5df;
  padding: 4% 3%;
  border-radius: 8px;
`;

const RemoveKeyboardButtonBaseColor = {
  r: 252,
  g: 108,
  b: 101
};

const RemoveKeyboardButton = styled.div`
  background: rgb(
    ${RemoveKeyboardButtonBaseColor.r},
    ${RemoveKeyboardButtonBaseColor.g},
    ${RemoveKeyboardButtonBaseColor.b}
  );
  border-radius: 100%;
  float: right;
  width: 300px;
  padding: 0px 0px 10px 0px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  max-width: 42px;
  color: black;
  box-shadow: 0 9px
    ${AdjustHSLColor(GetColor(RemoveKeyboardButtonBaseColor), 5, -4, -6)};
  -ms-user-select: none;
  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;

  :hover {
    background-color: ${AdjustHSLColor(
      GetColor(RemoveKeyboardButtonBaseColor),
      5,
      -10,
      10
    )};
    box-shadow: 0 9px
      ${AdjustHSLColor(GetColor(RemoveKeyboardButtonBaseColor), 0, -14, 5)};
    color: ${CalculateTextColor(RemoveKeyboardButtonBaseColor)};
  }

  :active {
    background-color: ${AdjustHSLColor(
      GetColor(RemoveKeyboardButtonBaseColor),
      5,
      2,
      -11
    )};
    box-shadow: 0 5px
      ${AdjustHSLColor(GetColor(RemoveKeyboardButtonBaseColor), 5, 4, -27)};
    transform: translateY(7px);
    color: hsl(0, 0%, 100%);
  }
`;

export const Keyboard: FunctionComponent<Props> = (props) => {
  const [keyColor, useKeyColor] = useState({
    r: 20,
    g: 15,
    b: 46
  });

  const [plateColor, usePlateColor] = useState({
    r: 166,
    g: 177,
    b: 225
  });

  const UpdateKeyColor = (r, g, b) => {
    useKeyColor({
      r: r,
      g: g,
      b: b
    });
  };

  const UpdatePlateColor = (r, g, b) => {
    usePlateColor({
      r: r,
      g: g,
      b: b
    });
  };

  const keyboardNameStyle: CSSProperties = {
    fontFamily: "Raleway",
    fontSize: 30,
    textAlign: "center",
    color: `${RGBColorToString(keyColor)}`,
    background: `${RGBColorToString(plateColor)}`,
    width: "43%",
    margin: "1% auto",
    padding: "1%",
    borderRadius: "8px",
    fontWeight: "bold"
  };

  return (
    <div>
      <KeyboardBackground>
        <RemoveKeyboardButton
          onClick={(event: any) => {
            props.RemoveKeyboard(props.id);
          }}
        >
          x
        </RemoveKeyboardButton>
        <h1 style={keyboardNameStyle}>{props.name}</h1>
        <KeyboardCustomizer
          keyColor={keyColor}
          plateColor={plateColor}
          UpdateKeyColor={UpdateKeyColor}
          UpdatePlateColor={UpdatePlateColor}
        />
        <Board keyColor={keyColor} plateColor={plateColor} />
      </KeyboardBackground>
    </div>
  );
};
