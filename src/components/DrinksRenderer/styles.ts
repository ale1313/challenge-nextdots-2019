import { StyleSheet } from "react-native";

import { theme } from "../../styles";

const { drinksRenderer } = theme.color;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  listEmptyText: {
    fontSize: 30,
    color: drinksRenderer,
    textAlign: "center",
    maxWidth: "95%"
  }
});

export default styles;
