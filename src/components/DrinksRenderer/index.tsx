import * as React from "react";
import { FlatList } from "react-native";

import ListItem from "../ListItem";
import DefaultText from "../DefaultText";
import styles from "./styles";

interface Props {
  data: any;
  show: boolean;
  inputText: string;
  fetchError: string;
}

const DrinksRenderer = (props: Props) => {
  let { data, show, inputText, fetchError } = props;
  if (fetchError) {
    return (
      <DefaultText
        containerStyle={styles.container}
        textStyle={styles.listEmptyText}
        value={fetchError.toString()}
      />
    );
  } else if (data && show === true) {
    if (data.drinks === null) {
      return (
        <DefaultText
          containerStyle={styles.container}
          textStyle={styles.listEmptyText}
          value={`No results where found for "${inputText}"`}
        />
      );
    }
    return (
      <FlatList
        data={data.drinks}
        keyExtractor={(item: any) => item.idDrink}
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

export default DrinksRenderer;
