import * as React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { reduxForm } from "redux-form";

import { default as DefaultInput } from "../../../components/DefaultInput";
import { fetch, resultsShowing } from "../../../actions";
import DrinksRenderer from "../../../components/DrinksRenderer";

type StoreProps = ReturnType<typeof mapStateToProps>;

type ConnectProps = StoreProps & {
  fetchStart: Function;
};

interface Props {
  fetchStart: Function;
  resultsShowing: Function;
  inputText: string;
}

class DrinksList extends React.Component<Props> {
  changeTextHandler = (val: string) => {
    this.setState({
      inputText: val
    });
    if (this.props.inputText.length >= 3) {
      this.props.resultsShowing();
    }
  };
  async componentDidMount() {
    await this.props.fetchStart();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <DefaultInput
            placeholder="Drink name"
            style={styles.input}
            onChangeText={this.changeTextHandler}
            value={this.props.inputText}
          />
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

const mapStateToProps = (state: any) => {
  return {
    inputText: state.fetchReducer.inputText
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchStart: () => dispatch(fetch()),
    resultsShowing: () => dispatch(resultsShowing())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm<ConnectProps>({
    form: "drinkInput"
  })(DrinksList)
);
