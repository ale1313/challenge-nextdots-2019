import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";

import ListItem from "../ListItem/";
import { DefaultText } from "../DefaultText";

interface Props {
  data: any;
  show: boolean;
  inputText: string;
  fetchError: string;
}

const DrinksRenderer = (props: Props) => {
  if (props.fetchError) {
    return (
      <DefaultText
        containerStyle={styles.container}
        textStyle={styles.listEmptyText}
        value={props.fetchError.toString()}
      />
    );
  } else if (props.data && props.show === true) {
    if (props.data.drinks === null) {
      return (
        <DefaultText
          containerStyle={styles.container}
          textStyle={styles.listEmptyText}
          value={`No results where found for "${props.inputText}"`}
        />
      );
    }
    return (
      <FlatList
        data={props.data.drinks}
        keyExtractor={(item: object, index: number) => index.toString()}
        renderItem={({ item }: any) => (
          <ListItem drinkName={item.strDrink} drinkImage={item.strDrinkThumb} />
        )}
      />
    );
  } else {
    return (
      <DefaultText
        containerStyle={styles.container}
        textStyle={styles.listEmptyText}
        value="Please search your favourite drink"
      />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  listEmptyText: {
    fontSize: 30,
    color: "#FFF",
    textAlign: "center",
    maxWidth: "95%"
  }
});

const mapStateToProps = (state: any) => {
  return {
    data: state.fetchReducer.data,
    inputText: state.fetchReducer.inputText,
    fetchError: state.fetchReducer.fetchError
  };
};

export default connect(mapStateToProps)(DrinksRenderer);
