import { Link, useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useState } from "react";

const user = {
  id: "123456789",
  name: "Jeff B",
  username: "bezos",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg",
};

const NewTweet = () => {
  const router = useRouter();
  const [text, setText] = useState("");

  const onTweetPress = () => {
    console.warn("Posting new tweet", text);
    router.back();
    setText("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", marginTop: 50 }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 18 }}>
            Cancel
          </Link>
          <TouchableOpacity onPress={onTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: user.image }} style={styles.image} />
          <TextInput
            placeholder="What's happening?"
            multiline
            numberOfLines={5}
            style={{ flex: 1 }}
            value={text}
            onChangeText={setText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#1c9bfb",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    fontSize: 16,
    fontWeight: "600",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
});

export default NewTweet;
