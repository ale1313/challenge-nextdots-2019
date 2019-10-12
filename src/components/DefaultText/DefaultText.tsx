import * as React from "react";
import { View, Text } from "react-native";

interface Props {
  containerStyle: object;
  textStyle: object;
  value: string;
}

const DefaultText = (props: Props) => {
  return (
    <View style={props.containerStyle}>
      <Text style={props.textStyle}>{props.value}</Text>
    </View>
  );
};

export default DefaultText;
