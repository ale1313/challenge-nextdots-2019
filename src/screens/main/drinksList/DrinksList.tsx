import * as React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { default as DefaultInput } from "../../../components/DefaultInput";
import { fetch } from "../../../actions/index";

class DrinksList extends React.Component {
  props: any;
  componentDidMount() {
    this.props.fetchStart();
  }
  render() {
    return (
      <View style={styles.container}>
        <DefaultInput placeholder="Drink name" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006064"
  }
});

const mapStateToProps = (state): any => {
  return {
    isLoading: state.fetchReducer.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStart: () => dispatch(fetch())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinksList);
