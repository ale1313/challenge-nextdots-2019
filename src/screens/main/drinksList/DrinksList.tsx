import * as React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";

import { default as DefaultInput } from "../../../components/DefaultInput";
import { fetch } from "../../../actions/index";
import DrinksRenderer from "../../../components/DrinksRenderer";

class DrinksList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="Drink name" style={styles.input} />
          <Icon
            name="ios-close-circle"
            size={40}
            color="#FF4135"
            style={styles.icon}
          />
        </View>
        <DrinksRenderer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006064"
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    width: "85%",
    height: "100%"
  },
  icon: {
    width: "15%",
    marginLeft: "4.1%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    fetchStart: () => dispatch(fetch())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DrinksList);
