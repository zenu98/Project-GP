import { StyleSheet, Text, View, FlatList, SectionList } from "react-native";
import TypeListScroll from "./TypeListScroll";
import { useSelector } from "react-redux";
import renderListItem from "./RenderListItem";

function List({ navigation }) {
  const gameType = useSelector((state) => state.filteredGames.type);
  const gameData = useSelector((state) => state.gameData.data).CATEGORIES;

  const filteredData = (data) => {
    if (gameType === "all") return data;
    else {
      return data.filter((item) => item.genre === gameType);
    }
  };

  const filteredSections = gameData
    .filter((category) => {
      const filteredItems = filteredData(category.data[0].list);
      return filteredItems && filteredItems.length > 0;
    })
    .map((filtered) => {
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
