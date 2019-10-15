import * as React from "react";
import { ImageBackground, Text, StatusBar, StyleSheet } from "react-native";

import { SearchButton } from "../../../components";
import { background } from "../../../assets";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  headingText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#E35F5F",
    top: "20%",
    width: "100%",
    textAlign: "center",
    textShadowColor: "#971111",
    textShadowOffset: { width: 5, height: 2 },
    textShadowRadius: 3
  },
  headingText2: {
    fontSize: 40,
    color: "crimson"
  }
});

export default Home;
