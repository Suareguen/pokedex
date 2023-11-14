import React, { useCallback, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useQuery } from "react-query";
import { getRandomPokemon } from "../services/pokemonService";
import { randomNumber } from "../utils/random";
import eevee from "../../assets/eevee.jpeg";
import { useFocusEffect } from "@react-navigation/core";

const Random = ({ navigation }) => {
  const [random, setRandom] = useState(randomNumber());
  const [pokemon, setPokemon] = useState({})

  const { isLoading, isError, data, error, refetch } = useQuery("pokemon", () =>
  getRandomPokemon(random)
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  const handleSearch = () => {
    const randomId = randomNumber();
    setRandom(randomId);
    refetch();
  };
  return (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={eevee}
        resizeMethod="cover"
      >
        <View style={styles.pokemonContainer}>
          <Text>{data.name[0].toUpperCase() + data.name.slice(1)}</Text>
          <Text>Height: {data.height}</Text>
          <Text>Base Experience: {data.base_experience}</Text>
          <Text>Type: {data.types[0].type.name}</Text>
          <View>
            <Image
              style={styles.image}
              source={{ uri: data.sprites.front_default }}
              onError={(error) => console.log("Error loading image:", error)}
            />
          </View>
        </View>
        <View style={styles.touchableContainer}>
          <TouchableOpacity style={styles.newButton} onPress={handleSearch}>
            <Text style={styles.touchableText}>Get Random Pokemon</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  pokemonContainer: {
    borderWidth: 2,
    borderColor: "thistle",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    margin: 10,
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    borderRadius: 50,
    width: 200,
    height: 200,
  },
  touchableContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  newButton: {
    borderWidth: 2,
    borderColor: "thistle",
    borderRadius: 50,
    padding: 10,
    backgroundColor: "blue",
  },
  touchableText: {
    color: "white",
  },
});

export default Random;
