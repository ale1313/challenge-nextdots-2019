import { createStackNavigator } from "react-navigation";

import { Home, DrinksList } from "../screens";

interface navigatorOptions {
  initialRouteName: string;
  headerMode: string;
}

const navigatorOptions = {
  initialRouteName: "Home",
  headerMode: "none"
};

const stack = {
  Home,
  DrinksList
};

interface stack {
  Home: any;
  DrinksList: any;
}

export const MainStack = createStackNavigator(
  stack as object,
  navigatorOptions as object
);
