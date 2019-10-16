import { Platform, StyleSheet } from "react-native";

import { theme } from "../../styles";

const { searchButtonBackground, searchButtonBorder } = theme.color;

const styles = StyleSheet.create({
  container: {
    top: Platform.OS === "ios" ? "80%" : "50%",
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: searchButtonBackground,
    borderColor: searchButtonBorder,
    borderWidth: 3,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 30,
    padding: 10
  }
});

export default styles;
