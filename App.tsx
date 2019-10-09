import * as React from "react";

import AppNavigator from "./src/navigation/AppNavigator";
import { store } from "./src/store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
