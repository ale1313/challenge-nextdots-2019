import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    margin: 6,
    height: 150,
    width: "95%",
    borderRadius: 10
  },
  drinkImage: {
    width: 120,
    height: 120,
    margin: 10,
    borderRadius: Platform.OS === "ios" ? 60 : 95
  },
  drinkName: {
    fontSize: 35,
    color: "#800000",
    maxWidth: "60%",
    fontFamily: Platform.OS === "ios" ? "Hoefler Text" : "Roboto"
  }
});

export default styles;
