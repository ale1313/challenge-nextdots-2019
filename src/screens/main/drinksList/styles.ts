import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006064"
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
  icon: {
    color: "#FF4135"
  },
  searchIcon: {
    position: "absolute",
    top: Platform.OS === "ios" ? "17%" : "15%",
    left: "13%"
  }
});

export default styles;
