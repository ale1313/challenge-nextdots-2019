import * as React from "react";
import { Text, Image, View, Platform, StyleSheet } from "react-native";

interface Props {
  drinkImage: string;
  drinkName: string;
}

const ListItem = (props: Props) => {
  let { drinkImage, drinkName } = props;
  const colorPicker = () => {
    const colors = [
      "#FFE4C4",
      "#E6E6FA",
      "#6495ED",
      "#98FB98",
      "#F0E68C",
      "#DA70D6",
      "#D2B48C",
      "#FA8072"
    ];
    let randomNumber = Math.floor(Math.random() * 8);
    return colors[randomNumber];
  };
  return (
    <View style={[{ backgroundColor: colorPicker() }, styles.container]}>
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

export default ListItem;
