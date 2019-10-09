import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { Text, TouchableOpacity, StyleSheet } from "react-native";

const SearchButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Icon name="ios-search" size={40} color="#DC143C" />
      <Text style={styles.buttonText}>search some drinks</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    top: "50%",
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
