import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Pokedex = ({ navigation }) => {
  return (
    <>
      <Text>Pokedex</Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Pokedex;
