import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Linking,
  StatusBar,
} from "react-native";

const DeviceWidth = Dimensions.get("window").width;

const Profile = () => {
  const openLinkedin = async () => {
    let url =
      "https://www.linkedin.com/in/ignacio-nicanor-sebastian-molina-portoles-a4b844173/";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "gray", fontSize: DeviceWidth * 0.07 }}>
        Mi perfil
      </Text>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            borderWidth: 0.5,
            borderRadius: 10,
            maxHeight: Dimensions.get("window").height * 0.3,
            width: DeviceWidth * 0.85,
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginVertical: 10,
            padding: 30,
          }}
        >
          <Text>Nombre: Ignacio Molina Portoles</Text>
          <Text>Edad: 20</Text>
          <Text>Email: ignacio.molina.portoles@gmail.com</Text>
          <Text onPress={openLinkedin}>
            Linkedin:
            <Text style={{ color: "#0000FF"}}>
              https://www.linkedin.com/in/ignacio-nicanor-sebastian-molina-portoles-a4b844173/
            </Text>
          </Text>
        </View>
      </View>
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

export default Profile;
