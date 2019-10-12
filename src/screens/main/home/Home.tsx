import * as React from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";

import SearchButton from "../../../components/SearchButton";
import background from "../../../assets/images/background.jpg";

interface Props {
  navigation: any;
}

class Home extends React.Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={background} style={styles.container}>
        <Text style={styles.headingText}>Cocktail Finder</Text>
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
    fontSize: 45,
    fontWeight: "bold",
    color: "#E35F5F",
    top: "20%",
    width: "100%",
    textAlign: "center",
    textShadowColor: "#971111",
    textShadowOffset: { width: 5, height: 2 },
    textShadowRadius: 3
  }
});

export default Home;
