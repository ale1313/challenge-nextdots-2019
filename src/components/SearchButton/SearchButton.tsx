import * as React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { Text, TouchableOpacity, Platform, StyleSheet } from "react-native";

interface Props {
  onPress: any;
}

const SearchButton = (props: Props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name="ios-search" size={40} color="#DC143C" />
      <Text style={styles.buttonText}>Search some drinks</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    top: Platform.OS === "ios" ? "80%" : "50%",
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEE",
    borderColor: "#FA8072",
    borderWidth: 3,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 30,
    padding: 10
  }
});

export default SearchButton;
