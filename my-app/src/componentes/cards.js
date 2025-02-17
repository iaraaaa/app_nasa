//un car similar al que esta en classroom

import { View } from "react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Link from "./link";

//debe recibir un objeto como parametro
//titulo del json 
//date del json
//boton detalles


export default Card = ({ Data, onPres }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{Data.title}</Text>
      <Image style={styles.img} source={{ uri: Data.url }} />
      <Text style={styles.texto}>{Data.date}</Text>
      <Link texto="Detalles" onPres={onPres} />
      {/* <TouchableOpacity onPress={onPres}>
        <Text style={{ color: "white", alignSelf: "flex-end", padding: 5 }}>
          Detalles
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 10,
    borderColor: "#fc3d21",
    borderWidth: 2,
    borderRadius: 10,
  },
  img: {
    alignSelf: "center",
    width: 270,
    height: 200,
    borderRadius: 10,
  },
  texto: {
    paddingVertical: 5,
    color: "white",
  },
});