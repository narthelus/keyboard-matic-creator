import * as React from "react";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { ColorSelector } from "./ColorSelector";

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
  UpdateKeyColor: (r: number, g: number, b: number) => void;
  UpdatePlateColor: (r: number, g: number, b: number) => void;
}

const CustomizerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3%;
`;

export const KeyboardCustomizer: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <CustomizerContainer>
        <ColorSelector
          target={"Plate"}
          text={"Change Base Color"}
          keyColor={props.keyColor}
          plateColor={props.plateColor}
          UpdateKeyColor={props.UpdateKeyColor}
          UpdatePlateColor={props.UpdatePlateColor}
        />
        <ColorSelector
          target={"Keys"}
          text={"Change Key Color"}
          keyColor={props.keyColor}
          plateColor={props.plateColor}
          UpdateKeyColor={props.UpdateKeyColor}
          UpdatePlateColor={props.UpdatePlateColor}
        />
      </CustomizerContainer>
    </div>
  );
};
