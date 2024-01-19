import { StyleSheet, Text, View } from "react-native";
import NavigationBar from "../components/NavigationBar";
import List from "../components/List";

function GameList({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.nav_Container}>
        <NavigationBar />
      </View>
      <View style={styles.listContainer}>
        <List navigation={navigation} />
      </View>
    </View>
  );
}

export default GameList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav_Container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  menuContainer_title: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "",
  },
  listContainer: {
    flex: 6,
    backgroundColor: "#fff",
  },
});
