import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  SectionList,
  Image,
  ImageBackground,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import GridItem from "./GridItem";
import TypeListScroll from "./TypeListScroll";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useSelector } from "react-redux";
function renderListItem({ item, navigation }) {
  const lastItem = item.last === true;
  const { title, image } = item;
  const pressHandler = () => {
    navigation.navigate("GameDetail");
  };
  return (
    <View style={[styles.gridItem, { maxWidth: lastItem ? "42%" : "50%" }]}>
      <Pressable style={{ flex: 1 }} onPress={pressHandler}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{
              uri: image,
            }}
            style={styles.image}
            onError={({ nativeEvent: { error } }) => console.warn(error)}
          >
            <LinearGradient
              colors={["transparent", "black"]}
              style={{
                flex: 0.25,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  margin: 1,
                  fontWeight: 700,
                  fontSize: 18,
                  color: "white",
                }}
              >
                {title}
              </Text>
            </LinearGradient>
          </ImageBackground>
        </View>
      </Pressable>
    </View>
  );
}

function List({ navigation }) {
  const gameType = useSelector((state) => state.filteredGames.type);
  console.log(gameType);

  const filteredData = (data) => {
    if (gameType === "all") return data;
    else {
      return data.filter((item) => item.genre === gameType);
    }
  };

  const filteredSections = CATEGORIES.filter((category) => {
    const filteredItems = filteredData(category.data[0].list);
    return filteredItems && filteredItems.length > 0;
  }).map((filtered) => {
    const filteredItems = filteredData(filtered.data[0].list);

    return {
      ...filtered,
      data: [{ list: filteredItems }],
    };
  });

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={filteredSections}
      renderItem={({ item }) => (
        <FlatList
          data={item.list}
          numColumns={2}
          renderItem={({ item }) => renderListItem({ item, navigation })}
          keyExtractor={item.title}
        />
      )}
      renderSectionHeader={({ section }) => (
        <View>
          <Text style={{ marginLeft: 16, marginTop: 16, fontSize: 16 }}>
            {section.date}
          </Text>
        </View>
      )}
      ListHeaderComponent={<TypeListScroll />}
    />
  );
}
export default List;
const styles = StyleSheet.create({
  gridItem: {
    display: "flex",
    flexDirection: "row",
    flex: 1 / 2,
    margin: 14,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    overflow: "hidden",
    justifyContent: "flex-end",

    borderRadius: 7,
  },
});
