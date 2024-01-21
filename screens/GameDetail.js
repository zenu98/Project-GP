import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

function GameDetail({ route }) {
  const selectedGame = route.params.selectedGame;
  console.log(selectedGame);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Header />
      </View>

      <View style={styles.game_info_container}>
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <View>
            <Image
              source={{
                uri: selectedGame.image,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.info}>
            <Text style={{ fontSize: 150, color: "white" }}>
              {selectedGame.title}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default GameDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  game_info_container: {
    flex: 13,
    backgroundColor: "#212121",
  },
  image: {
    width: "100%",
    height: 300,
  },
  info: {
    marginTop: 20,
  },
});
