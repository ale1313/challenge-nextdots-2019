import * as React from "react";
import { View, StatusBar } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { DefaultInput, DrinksRenderer } from "../../../components";
import styles from "./styles";
import { getDrinks } from "../../../actions";

type StoreProps = ReturnType<typeof mapStateToProps>;

type ConnectProps = StoreProps & {
  getDrinks: Function;
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
    const { getDrinks, fetchIsLoading } = this.props;
    let changeText = () => {
      if (val.length >= 3) {
        this.setState({
          showResults: true
        });
        getDrinks(val, fetchIsLoading);
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
    const { reset } = this.props;
    this.setState({
      showResults: false
    });
    reset();
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
    const { navigation, inputText, fetchError, data } = this.props;
    const { showResults } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.inputContainer}>
          <Icon.Button
            name="ios-arrow-back"
            size={40}
            color="#FFF"
            backgroundColor="transparent"
            onPress={() => navigation.goBack()}
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
            show={showResults}
            inputText={inputText}
            data={data}
            fetchError={fetchError}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    inputText: state.drinksReducer.inputText,
    drinkInput: state.form.drinkInput,
    fetchError: state.drinksReducer.fetchError,
    data: state.drinksReducer.data,
    fetchIsLoading: state.drinksReducer.fetchIsLoading
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getDrinks: (data: string, fetchIsLoading: boolean) =>
      dispatch(getDrinks(data, fetchIsLoading))
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
