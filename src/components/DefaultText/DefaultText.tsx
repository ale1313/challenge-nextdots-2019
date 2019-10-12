import * as React from "react";
import { View, Text } from "react-native";

interface Props {
  containerStyle: object;
  textStyle: object;
  value: string;
}

const DefaultText = (props: Props) => {
  let { containerStyle, textStyle, value } = props;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{value}</Text>
    </View>
  );
};

export default DefaultText;
