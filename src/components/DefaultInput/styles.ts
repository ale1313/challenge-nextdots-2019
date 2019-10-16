import { StyleSheet } from "react-native";

import { theme } from "../../styles";

const { defaultInputBorder, defaultInputBackground } = theme.color;

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    height: "10%",
    borderColor: defaultInputBorder,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: defaultInputBackground,
    fontSize: 20,
    paddingLeft: 45
  }
});

export default styles;
