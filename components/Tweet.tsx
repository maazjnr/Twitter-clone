import { View, Text, Image, StyleSheet } from "react-native";
import tweets from "../assets/data/tweets";
import React from "react";

const tweet = tweets[1];

const Tweet = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.userImage} />

      <View style={styles.mainContainer}>
        <Text style={styles.name}> {tweet.user.name} </Text>
        <Text style={styles.content}> {tweet.content} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    backgroundColor: "#fff",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },

  name: {
    fontWeight: "600",
  },

  content: {
    lineHeight: 20,
    marginTop: 5,
  },
});

export default Tweet;