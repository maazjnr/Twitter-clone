import { StyleSheet, View, FlatList, Pressable } from "react-native";
import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      {/* <Tweet tweet={tweets[0]} /> */}
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />

      <Pressable >
      <Link href={'/new-tweet'} asChild>
      <Entypo name="plus" size={24} color="#fff" style={styles.floatingButton} />
      </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },

  floatingButton: {
    backgroundColor: "#1c9bfb",
    width: 50,
    height: 50,
    borderRadius: 50,
    position: "absolute",
    right: 20,
    bottom: 15,
    lineHeight: 50,
    shadowColor: "#000",
    overflow: "hidden",
    textAlign: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
