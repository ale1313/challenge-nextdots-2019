import * as React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

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

export default SearchButton;
