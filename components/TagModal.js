import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../store/types";
import { Feather } from "@expo/vector-icons";

const TagModal = () => {
  const categoryList = useSelector((state) => state.gameData.category);
  const sortedCategoryList = [...categoryList].sort(
    (a, b) => a.text.length - b.text.length
  );

  const dispatch = useDispatch();
  const modalHandler = () => {
    dispatch(setModal());
  };
  return (
    <View>
      <Modal transparent={true}>
        <View style={styles.modal_background}>
          <View style={styles.modal_inner}>
            <View style={{ flex: 0.15 }}>
              <Pressable style={{ margin: 10 }}>
                <Feather name="x-circle" size={36} color="#5D5D5D" />
              </Pressable>
            </View>
            <ScrollView
              style={styles.modal_inner_tagList_container}
              contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
            >
              {sortedCategoryList.map((item) => (
                <Pressable
                  key={item.genre}
                  style={styles.modal_inner_tagList_contents}
                >
                  <Text style={styles.modal_inner_tagList_contents_text}>
                    {item.text}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
            <View style={{ flex: 0.15 }}>
              <Pressable onPress={modalHandler}>
                <Text>적용</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  modal_background: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modal_inner: {
    flex: 0.6,
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,

    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modal_inner_tagList_container: {
    backgroundColor: "aliceblue",
    flex: 0.7,

    flexWrap: "wrap",
    marginHorizontal: 20,
    padding: 5,
    borderRadius: 10,
  },
  modal_inner_tagList_contents: {
    alignSelf: "flex-start",
    width: "auto",
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#8C8C8C",
  },
  modal_inner_tagList_contents_text: {
    padding: 5,
    color: "#7A7A7A",
  },
});
export default TagModal;
