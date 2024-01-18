import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import GameList from "./screens/GameList";
import { Provider } from "react-redux";
import { store } from "./store/store";
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        <GameList />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 30,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
