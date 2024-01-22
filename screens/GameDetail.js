import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import Header from "../components/Header";
import { useCallback, useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
function GameDetail({ route }) {
  const selectedGame = route.params.selectedGame;
  console.log(selectedGame);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Header
          customStyle={styles.header_black}
          textStyle={styles.textStyle}
          logoStyle={styles.logoStyle}
        />
      </View>

      <View style={styles.game_info_container}>
        <ScrollView>
          <View style={styles.image_container}>
            <Image
              source={{
                uri: selectedGame.image,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.info_container}>
            <View style={{ padding: 10 }}>
              <Text style={[styles.info_contents_title]}>
                {selectedGame.title}
              </Text>
              <Text style={styles.info_contents_detail}>
                CATEGORY: 3인칭 액션 어드벤처
              </Text>
              <Text style={styles.info_contents_detail}>
                RELEASE DATE: 2019년 3월 22일
              </Text>
              <Text style={styles.info_contents_detail}>
                DEVELOPER:프롬 소프트웨어
              </Text>
              <Text style={styles.info_contents_detail}>
                PUBLISHER:액티비전
              </Text>
              <View style={{ marginTop: 30 }}>
                <YoutubePlayer
                  height={300}
                  play={playing}
                  videoId={"4OgoTZXPACo"}
                  onChangeState={onStateChange}
                  webViewStyle={{ opacity: 0.99 }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default GameDetail;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  game_info_container: {
    flex: 13,
    backgroundColor: "#212121",
  },
  image_container: {
    width: "100%",
    height: 450,
  },
  image: {
    height: "100%",
  },
  info_container: {
    backgroundColor: "#212121",
  },
  info_contents_title: {
    color: "white",
    fontSize: 40,
    fontWeight: 700,
    marginBottom: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  info_contents_detail: {
    color: "white",
    paddingVertical: 5,
  },
  header_black: {
    backgroundColor: "#212121",
    borderColor: "#353535",
  },
  textStyle: {
    color: "white",
  },
  logoStyle: {
    color: "white",
  },
});
