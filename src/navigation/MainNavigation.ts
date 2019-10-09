import { createStackNavigator } from "react-navigation";

import { Home, DrinksList } from "../screens";

const navigatorOptions = {
  initialRouteName: "Home"
};

const stack = {
  Home: Home,
  DrinksList: DrinksList
};

interface stack {
  Home: any;
  DrinksList: any;
}

export const MainStack = createStackNavigator(stack);
