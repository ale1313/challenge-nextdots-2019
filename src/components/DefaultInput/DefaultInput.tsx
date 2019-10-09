import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface Props {
  placeholder: string;
  style: [];
}

const DefaultInput = (props: Props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={[styles.textInput, props.style]}
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
    textAlign: "center"
  }
});

export default DefaultInput;
