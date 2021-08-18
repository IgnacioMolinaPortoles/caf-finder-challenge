import React, { useContext, useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import MasonryList from "@react-native-seoul/masonry-list";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { kittiesContext } from "../../contextApi/KittiesContext";

const DeviceWidth = Dimensions.get("window").width;

const Favourites = () => {
  const ctx = useContext(kittiesContext);

  const removeFromFavourites = (uri) => {
    ctx.setFavourites(ctx.favourites.filter((item) => item.uri !== uri));
  };

  const renderItem = ({ item }) => {
    return (
      <View
        key={item.id}
        style={{
          padding: DeviceWidth * 0.05,
        }}
      >
        <View
          style={{
            borderWidth: 0.5,
            borderColor: "black",
            width: item.width + 1,
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: item.width,
              height: item.height,
            }}
            source={{ uri: item.uri }}
          />
          <TouchableOpacity
            onPress={() => {
              removeFromFavourites(item.uri);
            }}
            style={{ padding: 5 }}
          >
            <Ionicons name="heart" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: "gray", fontSize: DeviceWidth * 0.07 }}>
        Mis favoritos
      </Text>
      <View
        style={{
          borderWidth: 0.5,
          borderRadius: 10,
          width: Dimensions.get("window").width * 0.7,
          alignItems: "center",
          marginVertical:10
        }}
      >
        <Text style={{ padding: 10 }}>
          Mis gatos favoritos: {ctx.favourites.length}
        </Text>
      </View>
      <MasonryList
        data={ctx.favourites}
        keyExtractor={(item, index) => item.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        refreshing={false}
        onRefresh={() => {}}
        onEndReachedThreshold={0.1}
        onEndReached={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Favourites;
