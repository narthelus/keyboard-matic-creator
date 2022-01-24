import * as React from "react";
import { FunctionComponent } from "react";
import { Row } from "./Row";
import styled from "styled-components";
import keyData from "../API/KeyData";
import {
  GetColor,
  AdjustHSLColor,
  RGBColorToString
} from "../utilities/ColorUtils";

interface Props {
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
}

const Plate = styled.section<Props>`
  display: flex;
  background: ${(props) => RGBColorToString(props.plateColor)};
  flex-wrap: wrap;
  margin: auto;
  max-width: 810px;
  height: 380px;
  padding: 20px;
  box-shadow: 0 9px
    ${(props) => AdjustHSLColor(GetColor(props.plateColor), 5, -4, -6)};
  border-radius: 8px;
`;

export const Board: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <Plate {...props}>
        {keyData.map((r) => (
          <Row key={r.id} id={r.id} color={props.keyColor} />
        ))}
      </Plate>
    </div>
  );
};
