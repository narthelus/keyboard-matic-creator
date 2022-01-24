import * as React from "react";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { Key } from "./Key";
import keyData from "../API/KeyData";

interface Props {
  key: number;
  id: number;
  color: {
    r: number;
    g: number;
    b: number;
  };
}

const KeyRow = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: "red";
  max-width: 810px;
  height: 40px;
`;

export const Row: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <KeyRow>
        {keyData[props.id].keys.map((k) => (
          <Key
            key={k.id}
            keyColor={props.color}
            keyText={k.text}
            keyWidth={k.width}
            visible={k.visible}
          />
        ))}
      </KeyRow>
    </div>
  );
};
