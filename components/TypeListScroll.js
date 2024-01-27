import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { category } from "../data/dummy-data";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterGames } from "../store/types";
const TypeListScroll = (props) => {
  const gameType = useSelector((state) => state.filteredGames.type);
  const dispatch = useDispatch();

  const pressHandler = (key) => {
    dispatch(filterGames({ type: key }));
  };

  return (
    <View style={styles.all_container}>
      <View>
        <Text style={styles.tagText}>Tag</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.menuContainer_title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {category.map((item) => (
          <Pressable
            onPress={() => pressHandler(item.genre)}
            key={item.genre}
            style={[
              styles.type_container,
              gameType === item.genre && styles.type_container_pressed,
            ]}
          >
            <View>
              <Text style={gameType === item.genre && { color: "white" }}>
                {item.text}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default TypeListScroll;

const deviceWidth = Dimensions.get("window").height;

const styles = StyleSheet.create({
  all_container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#D2D2D2",
  },
  menuContainer_title: {
    height: 50,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  type_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    height: 30,
    margin: 8,
    borderRadius: 4,
  },
  type_container_pressed: {
    backgroundColor: "#212121",
  },
  tagText: {
    borderRightWidth: 1,
    paddingRight: 10,
    borderColor: "#D2D2D2",
  },
});
