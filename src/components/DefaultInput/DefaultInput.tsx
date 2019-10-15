import * as React from "react";
import { TextInput } from "react-native";

import styles from "./styles";

interface Props {
  placeholder: string;
  style: object;
  onChangeText: any;
  value: string;
}

const DefaultInput = (props: Props) => {
  let { placeholder, style, onChangeText, value } = props;
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.textInput, style]}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default DefaultInput;
