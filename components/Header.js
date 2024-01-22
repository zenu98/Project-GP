import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
function Header({ customStyle, textStyle, logoStyle }) {
  return (
    <View style={[styles.navContainer_top, customStyle]}>
      <Text style={[styles.text_Title, textStyle]}>게임플래너</Text>
      <View style={styles.navContainer_top_contents}>
        <View style={{ paddingHorizontal: 20 }}>
          <AntDesign
            size={30}
            style={[styles.logo, logoStyle]}
            name="calendar"
          />
        </View>

        <View>
          <Octicons name="person" size={30} style={[styles.logo, logoStyle]} />
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
  text_Title: {
    color: "black",
  },
  logo: {
    color: "black",
  },
});
