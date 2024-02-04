import { StyleSheet, Text, View, FlatList, SectionList } from "react-native";
import TypeListScroll from "./TypeListScroll";
import { useSelector } from "react-redux";
import renderListItem from "./RenderListItem";

function List({ navigation }) {
  const gameType = useSelector((state) => state.filteredGames.type);
  const gameListData = useSelector((state) => state.gameData.datas);
  const selectedPlatform = useSelector((state) => state.filteredGames.platform);
  const gameData = Object.values(gameListData[selectedPlatform]);

  const filteredData = (data) => {
    if (gameType === "all") return data;
    else {
      const filteredItems = data.filter((item) =>
        item.category.some((category) => category.genre.includes(gameType))
      );
      return filteredItems;
    }
  };

  const filteredSections = gameData
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

  return (
    <SectionList
      keyExtractor={(index) => index.toString()}
      sections={filteredSections}
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
