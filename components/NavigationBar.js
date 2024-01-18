import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
function NavigationBar() {
  return (
    <View style={styles.navContainer}>
      <View style={styles.navContainer_top}>
        <Text>게임플래너</Text>
        <View style={styles.navContainer_top_contents}>
          <View style={{ paddingHorizontal: 20 }}>
            <AntDesign color="black" size={30} name="calendar" />
          </View>

          <View>
            <Octicons name="person" size={30} color="black" />
          </View>
        </View>
      </View>
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
  navContainer_top: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  navContainer_top_contents: {
    flexDirection: "row",
  },
  navContainer_bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderColor: "#E4E4E4",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  text: {
    textAlign: "center",
  },
});
