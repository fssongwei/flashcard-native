import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch } from "react-redux";
import { updateJWT } from "../../../redux/actions";

const AuthPage = () => {
  const dispatch = useDispatch();
  let webviewRef = useRef();
  const CHECK_COOKIE = ` ReactNativeWebView.postMessage("Cookie: " + document.cookie);
  true;`;

  const onNavigationStateChange = (navigationState) => {
    // Check cookies every time URL changes
    if (webviewRef.current) {
      webviewRef.current.injectJavaScript(CHECK_COOKIE);
    }
  };

  const onMessage = (event) => {
    const { data } = event.nativeEvent;

    if (data.includes("Cookie: jwt")) {
      let jwt = data.substring(data.indexOf("jwt"));
      dispatch(updateJWT(jwt));
    }
  };

  return (
    <View style={styles.screen}>
      <WebView
        ref={webviewRef}
        source={{ uri: "https://auth.wei.ai/?origin=https://auth.wei.ai" }}
        startInLoadingState={true}
        scalesPageToFit={true}
        userAgent="Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1"
        onNavigationStateChange={onNavigationStateChange}
        onMessage={onMessage}
        sharedCookiesEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default AuthPage;
