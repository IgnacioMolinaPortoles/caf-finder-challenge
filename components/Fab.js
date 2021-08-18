import React, { useState } from "react";
import { Text, TouchableOpacity, Modal, View, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const fabSize = Dimensions.get("window").width * 0.08

const Fab = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Mejoras a la app</Text>
            <Text>Mejorar los estilos</Text>
            <Text>Alguna forma de que los favoritos no se borren (Async storage, redux persist, llamada a alguna api, etc)</Text>
            <Text>Usar algun tipo de login (Firebase)</Text>
            <TouchableOpacity
            style={{marginTop:10}}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={{
          alignItems: "center",
          elevation:5,
          justifyContent: "center",
          width: fabSize + 10,
          position: "absolute",
          bottom: 60,
          right: 10,
          height: fabSize + 10,
          backgroundColor: "#B4F7CE",
          borderRadius: 100,
        }}
      >
        <Ionicons name="information-circle" size={fabSize} color="black" />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "#2196F3",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:Dimensions.get("window").width * 0.05
  },
});

export default Fab;
