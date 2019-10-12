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
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    margin: 6,
    height: 80,
    width: "95%",
    borderRadius: 10
  },
  drinkImage: {
    width: 60,
    height: 60,
    margin: 10
  },
  drinkName: {
    fontSize: 30,
    color: "#800000",
    maxWidth: "80%"
  }
});

export default ListItem;
