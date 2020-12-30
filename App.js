import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";

// redux
import thunk from "redux-thunk";
import { Provider as ReduxProvider } from "react-redux";
import { Provider } from "@ant-design/react-native";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers";
// import Navigator from "./navigations/Navigator";

// app
import FlashcardApp from "./FlashcardApp";

import { View, Text } from "react-native";

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const loadFunc = async () => {
      await Font.loadAsync(
        "antoutline",
        // eslint-disable-next-line
        require("@ant-design/icons-react-native/fonts/antoutline.ttf")
      );

      await Font.loadAsync(
        "antfill",
        // eslint-disable-next-line
        require("@ant-design/icons-react-native/fonts/antfill.ttf")
      );
      // eslint-disable-next-line
      setIsReady(true);
    };
    loadFunc();
  }, []);

  if (!isReady) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <ReduxProvider store={store}>
      <Provider>
        <FlashcardApp />
      </Provider>
    </ReduxProvider>
  );
};

export default App;
