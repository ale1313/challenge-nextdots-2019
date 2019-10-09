import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";

import ListItem from "../ListItem/";

const DrinksRenderer = props => {
  if (props.data) {
    return (
      <FlatList
        data={props.data.drinks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ListItem drinkName={item.strDrink} drinkImage={item.strDrinkThumb} />
        )}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.listEmptyText}>
          Please search your favourite drink
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  listEmptyText: {
    fontSize: 30,
    color: "#FFF",
    textAlign: "center"
  }
});

const mapStateToProps = (state: any) => {
  return {
    data: state.fetchReducer.data
  };
};

export default connect(mapStateToProps)(DrinksRenderer);
