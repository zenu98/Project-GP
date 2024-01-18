import { Pressable, StyleSheet, Text, View } from "react-native";

function GridItem({ title, color }) {
  return (
    <View style={styles.gridItem}>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default GridItem;

const styles = StyleSheet.create({
  gridItem: {
    display: "flex",
    flexDirection: "row",
    flex: 1 / 3,
    margin: 16,

    height: 150,
    borderRadius: 8,
    elevation: 1,
  },
});
