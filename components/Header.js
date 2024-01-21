import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
function Header() {
  return (
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
  );
}

export default Header;
const styles = StyleSheet.create({
  navContainer_top: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderColor: "#E4E4E4",

    borderBottomWidth: 1,
  },
  navContainer_top_contents: {
    flexDirection: "row",
  },
});
