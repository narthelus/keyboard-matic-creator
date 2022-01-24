import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import {
  AdjustHSLColor,
  CalculateTextColor,
  GetColor
} from "../utilities/ColorUtils";
import { Keyboard } from "./Keyboard";

const Title = styled.h1`
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: #ffffff;
  background: #beaac4;
  width: 40%;
  margin: 2% auto;
  padding: 1.2%;
  border-radius: 8px;
`;

const Caption = styled.h2`
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: #ffffff;
  background: #beaac4;
  width: 40%;
  margin: 2% auto;
  padding: 1.2%;
  border-radius: 8px;
  font-size: 20px;
`;

const KeyboardsContainer = styled.div`
  margin: auto;
  width: 80%;
  padding: 2% 2%;
  background: #beaac4;
  border-radius: 8px;
`;

const AddKeyboardButtonBaseColor = {
  r: 214,
  g: 208,
  b: 130
};

const AddKeyboardButton = styled.div`
  background: rgb(
    ${AddKeyboardButtonBaseColor.r},
    ${AddKeyboardButtonBaseColor.g},
    ${AddKeyboardButtonBaseColor.b}
  );
  border-radius: 100%;
  margin: 2% auto;
  text-align: center;
  font-size: 50px;
  padding: 0% 1% 0.8% 1%;
  width: auto;
  max-width: 60px;
  color: black;
  box-shadow: 0 9px
    ${AdjustHSLColor(GetColor(AddKeyboardButtonBaseColor), 5, -4, -6)};
  -ms-user-select: none;
  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;

  :hover {
    background-color: ${AdjustHSLColor(
      GetColor(AddKeyboardButtonBaseColor),
      5,
      -10,
      10
    )};
    box-shadow: 0 9px
      ${AdjustHSLColor(GetColor(AddKeyboardButtonBaseColor), 0, -14, 5)};
    color: ${CalculateTextColor(AddKeyboardButtonBaseColor)};
  }

  :active {
    background-color: ${AdjustHSLColor(
      GetColor(AddKeyboardButtonBaseColor),
      5,
      2,
      -11
    )};
    box-shadow: 0 5px
      ${AdjustHSLColor(GetColor(AddKeyboardButtonBaseColor), 5, 4, -27)};
    transform: translateY(7px);
    color: hsl(0, 0%, 100%);
  }
`;

const KeyboardLimits = styled.div`
  margin: auto auto 1.5% auto;
`;

export const Manager: FunctionComponent = () => {
  const [keyboardData, useKeyboardData] = useState({
    keyboards: []
  });

  const AddKeyboard = (name) => {
    useKeyboardData({
      keyboards: [
        ...keyboardData.keyboards,
        { keyboardName: name, id: uuidv4() }
      ]
    });
  };

  const RemoveKeyboard = (id) => {
    useKeyboardData({
      keyboards: keyboardData.keyboards.filter((k) => k.id !== id)
    });
  };

  return (
    <div>
      <Title>Keyboard-O-Matic</Title>
      <KeyboardsContainer>
        {keyboardData.keyboards.map((k) => (
          <KeyboardLimits>
            <Keyboard
              key={k.id}
              id={k.id}
              name={k.keyboardName}
              RemoveKeyboard={RemoveKeyboard}
            />
          </KeyboardLimits>
        ))}
        {keyboardData.keyboards.length === 0 ? (
          <Caption>Press the + to begin creating a keyboard layout!</Caption>
        ) : (
          <Caption>
            You can have more than one keyboard layout at a time.
          </Caption>
        )}
        <AddKeyboardButton
          onClick={(event: any) => {
            AddKeyboard("Custom Keyboard");
          }}
        >
          +
        </AddKeyboardButton>
      </KeyboardsContainer>
    </div>
  );
};
