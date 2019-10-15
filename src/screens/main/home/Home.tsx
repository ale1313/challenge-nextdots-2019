import * as React from "react";
import { ImageBackground, Text, StatusBar } from "react-native";

import { SearchButton } from "../../../components";
import { background } from "../../../assets";
import styles from "./styles";

interface Props {
  navigation: any;
}

class Home extends React.Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={background} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.headingText}>Mr. Cocktail</Text>
        <Text style={[styles.headingText, styles.headingText2]}>
          Drink Finder
        </Text>
        <SearchButton onPress={() => navigation.navigate("DrinksList")} />
      </ImageBackground>
    );
  }
}

export default Home;
