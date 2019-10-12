import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface Props {
  placeholder: string;
  style: any;
  onChangeText: any;
  value: string;
}

const DefaultInput = (props: Props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={[styles.textInput, props.style]}
      onChangeText={props.onChangeText}
      value={props.value}
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
