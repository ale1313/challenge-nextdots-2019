import * as React from "react";
import { Text, Image, View } from "react-native";

import styles from "./styles";

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

export default ListItem;
