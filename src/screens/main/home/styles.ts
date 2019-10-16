import { StyleSheet } from "react-native";

import { theme } from "../../../styles";

const { homeText, homeSubText, homeTextShadow } = theme.color;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  headingText: {
    fontSize: 50,
    fontWeight: "bold",
    color: homeText,
    top: "20%",
    width: "100%",
    textAlign: "center",
    textShadowColor: homeTextShadow,
    textShadowOffset: { width: 5, height: 2 },
    textShadowRadius: 3
  },
  headingText2: {
    fontSize: 40,
    color: homeSubText
  }
});

export default styles;
