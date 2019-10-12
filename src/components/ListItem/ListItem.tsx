import * as React from "react";
import { Text, Image, View, Platform, StyleSheet } from "react-native";

interface Props {
  drinkImage: string;
  drinkName: string;
}

const ListItem = (props: Props) => {
  let { drinkImage, drinkName } = props;
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{ uri: drinkImage }}
        style={styles.drinkImage}
      />
      <Text style={styles.drinkName}>{drinkName}</Text>
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
    maxWidth: "80%",
    fontFamily: Platform.OS === "ios" ? "Hoefler Text" : "Roboto"
  }
});

export default ListItem;
