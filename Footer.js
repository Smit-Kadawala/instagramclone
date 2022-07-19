import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.footerBodyMainView}>
      <TouchableOpacity
        onPress={() => {
          console.log("Home");
        }}
        style={styles.ImageView}
      >
        <Image
          source={require("../../Assets/home_light.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("Search");
        }}
        style={styles.ImageView}
      >
        <Image
          source={require("../../Assets/search_light.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("Reel");
        }}
        style={styles.ImageView}
      >
        <Image
          source={require("../../Assets/reels_light.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("Like");
        }}
        style={styles.ImageView}
      >
        <Image
          source={require("../../Assets/like_light.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("Profile");
        }}
        style={styles.ImageView}
      >
        <Image
          source={require("../../Assets/profile_light.png")}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerBodyMainView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexDirection: "row",
    borderTopWidth: 1,
  },
  ImageView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
});
