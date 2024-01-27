import { StyleSheet, Text, View, FlatList, SectionList } from "react-native";
import TypeListScroll from "./TypeListScroll";
import { useSelector } from "react-redux";
import renderListItem from "./RenderListItem";
import { ListOfGames } from "../data/dummy-data";
function List({ navigation }) {
  const gameType = useSelector((state) => state.filteredGames.type);
  const gameData = useSelector((state) => state.gameData.data.CATEGORIES);
  const gameListData = useSelector((state) => state.gameData.datas.ListOfGames);

  const realData = Object.values(gameListData.PC);
  console.log("realDAta", realData);
  const filteredData = (data) => {
    if (gameType === "all") return data;
    else {
      const result = data.filter((item) => item?.category === gameType);

      return result;
    }
  };

  const realSections = realData
    .filter((item) => {
      const realItems = filteredData(Object.values(item.games));

      return realItems && realItems.length > 0;
    })
    .map((filtered) => {
      const realItems = filteredData(Object.values(filtered.games));
      const { games, ...date } = filtered;
      return {
        ...date,
        data: [{ games: realItems }],
      };
    });

  // const filteredSections = gameData
  //   .filter((category) => {
  //     const filteredItems = filteredData(category.data[0].list);
  //     return filteredItems && filteredItems.length > 0;
  //   })
  //   .map((filtered) => {
  //     const filteredItems = filteredData(filtered.data[0].list);

  //     return {
  //       ...filtered,
  //       data: [{ list: filteredItems }],
  //     };
  //   });

  return (
    <SectionList
      keyExtractor={(index) => index.toString()}
      sections={realSections}
      renderItem={({ item }) => (
        <FlatList
          data={item.games}
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
