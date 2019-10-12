import * as React from "react";
import { TextInput, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    height: "10%",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#E3F2FD",
    fontSize: 20,
    paddingLeft: 45
  }
});

export default DefaultInput;
