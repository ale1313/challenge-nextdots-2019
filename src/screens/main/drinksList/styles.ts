import { Platform, StyleSheet } from "react-native";

import { theme } from "../../../styles";

const {
  drinksListBackground,
  drinksListCloseColor,
  drinksListBackBackground,
  drinksListBackColor,
  drinksListSearchIcon,
  drinksListCloseBackground
} = theme.color;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: drinksListBackground
  },
  backButton: {
    color: drinksListBackColor,
    backgroundColor: drinksListBackBackground
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: Platform.OS === "ios" ? 35 : 10
  },
  drinksContainer: {
    flex: 12
  },
  input: {
    width: "75%",
    height: 50
  },
  closeButton: {
    color: drinksListCloseColor,
    backgroundColor: drinksListCloseBackground
  },
  searchIcon: {
    position: "absolute",
    top: Platform.OS === "ios" ? "17%" : "15%",
    left: "13%",
    color: drinksListSearchIcon
  }
});

export default styles;
