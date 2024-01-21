import { StyleSheet, Text, View } from "react-native";

import Header from "./Header";
function NavigationBar() {
  return (
    <View style={styles.navContainer}>
      <Header />
      <View style={styles.navContainer_bottom}>
        <Text>PC</Text>
        <Text>XBox</Text>
        <Text>PS5</Text>
        <Text>Switch</Text>
      </View>
    </View>
  );
}

export default NavigationBar;

const styles = StyleSheet.create({
  navContainer: {
    flex: 2,
  },

  navContainer_bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderColor: "#E4E4E4",

    borderBottomWidth: 1,
  },
  text: {
    textAlign: "center",
  },
});
