import { StyleSheet,View} from "react-native";
import Tweet from "../../components/Tweet";

export default function TabOneScreen() {
  return (
      <View style={styles.page}>
        <Tweet />
      <Tweet />
      </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
