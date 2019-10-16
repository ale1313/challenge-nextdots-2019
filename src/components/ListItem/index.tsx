import * as React from "react";
import { Text, Image, View } from "react-native";

import styles, { backgrounds } from "./styles";

interface Props {
  drinkImage: string;
  drinkName: string;
}

const ListItem = (props: Props) => {
  let { drinkImage, drinkName } = props;
  const colorPicker = () => {
    let randomNumber = Math.floor(Math.random() * 8);
    return backgrounds[randomNumber];
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
