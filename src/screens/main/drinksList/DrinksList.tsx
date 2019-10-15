import * as React from "react";
import { View, Platform, StatusBar, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { DefaultInput, DrinksRenderer } from "../../../components";
import { fetch } from "../../../actions";

type StoreProps = ReturnType<typeof mapStateToProps>;

type ConnectProps = StoreProps & {
  fetch: Function;
  navigation: any;
};

type FormProps = InjectedFormProps<Values, ConnectProps>;

type Props = ConnectProps & FormProps;

interface Values {
  drink: string;
}

interface State {
  showResults: boolean;
}

class DrinksList extends React.Component<Props, State> {
  state = {
    showResults: false
  };
  changeTextHandler = (val: any) => {
    let changeText = () => {
      if (val.length >= 3) {
        this.setState({
          showResults: true
        });
        this.props.fetch(val);
      } else {
        this.setState({
          showResults: false
        });
      }
      clearInterval(timer);
    };
    const timer = setInterval(() => changeText(), 250);
  };
  cancelHandler = () => {
    this.setState({
      showResults: false
    });
    this.props.reset();
  };
  renderInput = (props: any) => {
    return (
      <DefaultInput
        placeholder="Search"
        style={styles.input}
        onChangeText={props.input.onChange}
        value={props.input.value}
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.inputContainer}>
          <Icon.Button
            name="ios-arrow-back"
            size={40}
            color="#FFF"
            backgroundColor="transparent"
            onPress={() => this.props.navigation.goBack()}
          />
          <Field
            name="drink"
            component={this.renderInput}
            onChange={this.changeTextHandler}
          />
          <Icon
            name="ios-search"
            size={40}
            color="gray"
            style={styles.searchIcon}
          />
          <Icon.Button
            name="ios-close-circle"
            size={40}
            iconStyle={styles.icon}
            onPress={this.cancelHandler}
            backgroundColor="transparent"
          />
        </View>
        <View style={styles.drinksContainer}>
          <DrinksRenderer
            show={this.state.showResults}
            inputText={this.props.inputText}
            data={this.props.data}
            fetchError={this.props.fetchError}
          />
        </View>
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
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: Platform.OS === "ios" ? 35 : 10
  },
  drinksContainer: {
    flex: 12
  },
  input: {
    width: "75%",
    height: 50
  },
  icon: {
    color: "#FF4135"
  },
  searchIcon: {
    position: "absolute",
    top: Platform.OS === "ios" ? "17%" : "15%",
    left: "13%"
  }
});

const mapStateToProps = (state: any) => {
  return {
    inputText: state.fetchReducer.inputText,
    drinkInput: state.form.drinkInput,
    fetchError: state.fetchReducer.fetchError,
    data: state.fetchReducer.data
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetch: (data: string) => dispatch(fetch(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm<Values, ConnectProps>({
    form: "drinkInput"
  })(DrinksList)
);
