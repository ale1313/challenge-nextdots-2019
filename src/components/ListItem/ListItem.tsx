import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

interface Props {
  drinkImage: string;
  drinkName: string;
}

const ListItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{ uri: props.drinkImage }}
        style={styles.drinkImage}
      />
      <Text style={styles.drinkName}>{props.drinkName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C0C0C0",
    margin: 3
  },
  drinkImage: {
    width: 30,
    height: 30,
    marginRight: 5
  },
  drinkName: {
    fontSize: 30,
    color: "#800000"
  }
});

export default ListItem;
