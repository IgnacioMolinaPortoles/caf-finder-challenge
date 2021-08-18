import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { getKitties } from "../../services/KittiesManager";
import MasonryList from "@react-native-seoul/masonry-list";
import { Ionicons } from "@expo/vector-icons";
import { kittiesContext } from "../../contextApi/KittiesContext";

const DeviceWidth = Dimensions.get("window").width;

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [kitties, setKitties] = useState([]);
  const ctx = useContext(kittiesContext);

  const fetchData = async () => {
    setIsLoading(true);
    const kitties = await getKitties();
    setKitties(kitties);
    setIsLoading(false);
  };
  const loadMoreKitties = async () => {
    if (!isLoading) {
      setIsLoading(true);
      const _kitties = await getKitties();
      setKitties([...kitties, ..._kitties]);
      setIsLoading(false);
    }
  };

  const reloadKitties = () => {
    if (!isLoading) {
      setIsLoading(true);
      setPagination(1);
      setKitties([]);
      fetchData();
    }
  };
  const saveToFavourites = (kitty) => {
    if (!ctx.favourites.includes(kitty.uri)) {
      ctx.setFavourites([...ctx.favourites, kitty]);
    } else {
      ctx.setFavourites(
        ctx.favourites.filter((item) => item.uri !== kitty.uri)
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              saveToFavourites(item);
            }}
            style={{ padding: 5 }}
          >
            <Ionicons
              name="heart"
              size={24}
              color={ctx.favourites.includes(item) ? "red" : "black"}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "gray", fontSize: DeviceWidth * 0.07 }}>
        Bienvenido a Cat finder
      </Text>
      <Text style={{ fontSize: DeviceWidth * 0.035 }}>
        Deslizar hacia abajo para ver mas gatos
      </Text>
      <Text style={{ fontSize: DeviceWidth * 0.035 }}>
        Seleccione un gato para agregarlo a favoritos
      </Text>
      <MasonryList
        data={kitties}
        keyExtractor={(item, index) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        refreshing={isLoading}
        onRefresh={reloadKitties}
        onEndReachedThreshold={0.05}
        onEndReached={loadMoreKitties}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Home;
