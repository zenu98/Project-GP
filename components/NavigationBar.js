import { Pressable, StyleSheet, Text, View } from "react-native";

import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { filterPlatform } from "../store/types";
function NavigationBar() {
  const platformList = useSelector(
    (state) => state.gameData.platforms.platform
  );
  const selectedPlatform = useSelector((state) => state.filteredGames.platform);
  console.log(selectedPlatform);
  const dispatch = useDispatch();
  const pressHandler = (key) => {
    dispatch(filterPlatform({ platform: key }));
  };
  console.log("PLATFORM", platformList);
  return (
    <View style={styles.navContainer}>
      <Header />
      <View style={styles.navContainer_bottom}>
        {platformList.map((item) => {
          return (
            <Pressable
              key={item}
              style={styles.platform_btn}
              onPress={() => pressHandler(item)}
            >
              <View>
                <Text
                  style={
                    selectedPlatform === item && styles.platform_btn_pressed
                  }
                >
                  {item}
                </Text>
              </View>
            </Pressable>
          );
        })}
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
  platform_btn: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },
  platform_btn_pressed: {
    color: "#1864ab",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
  },
});
