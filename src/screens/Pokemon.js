import React, { useCallback, useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getPokemon } from "../services/pokemonService";
import { useQuery } from "react-query";
import { useFocusEffect } from "@react-navigation/native";
import eevee from "../../assets/eevee.jpeg";
import { generatePokemonDescription } from "../utils/randomDescription";
import PokemonCard from "../components/PokemonCard";

const Pokemon = ({ navigation, route }) => {
  const { name } = route.params;
  const { isLoading, isError, data, error, refetch } = useQuery("pokemon", () =>
  getPokemon(name.toLowerCase())
  );
  const [description, setDescription] = useState(generatePokemonDescription(name[0].toUpperCase() + name.slice(1).toLowerCase()))


  useFocusEffect(
    useCallback(() => {
      const refetchData = async () => {
        try {
          await refetch();
        } catch (error) {
          console.error("Error refetching data:", error);
        }
      };
      refetchData();
    }, [refetch])
  );
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
        <TouchableOpacity onPress={() => refetch()}>
          <Text>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ImageBackground style={styles.imageBackGround} source={eevee}>
      <View style={styles.container}>
        <PokemonCard data={ data }/>
        <View style={styles.touchableContainer}>
          <TouchableOpacity
            style={styles.newButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.touchableText}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackGround: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  pokemonContainer: {
    borderWidth: 2,
    borderColor: "thistle",
    borderRadius: 50,
    padding: 10,
    flex: 1,
    alignItems: "center",
    margin: 10,
  },
  image: {
    borderRadius: 50,
    width: 200,
    height: 200,
  },
  touchableContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'red'
  },
  newButton: {
    borderWidth: 2,
    borderColor: "thistle",
    borderRadius: 50,
    padding: 10,
    backgroundColor: "blue",
  },
});

export default Pokemon;
