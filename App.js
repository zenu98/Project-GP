import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import GameList from "./screens/GameList";
import GameDetail from "./screens/GameDetail";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="GameList" component={GameList} />
            <Stack.Screen name="GameDetail" component={GameDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
