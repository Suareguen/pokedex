import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useQuery } from "react-query";
import { getRandomPokemon } from "../services/pokemonService";
import { randomNumber } from "../utils/random";
const Random = ({ navigation }) => {
  const [random, setRandom] = useState(randomNumber())
  const { isLoading, isError, data, error, refetch } = useQuery('pokemon',() => getRandomPokemon(random))
  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>
  }

  const handleSearch = () => {
  const randomId= randomNumber()
    setRandom(randomId)
    refetch()
  }
  console.log(random)
  return (
    <>
      <Text>Random</Text>
      <View style={styles.pokemonContainer}>
      <Text>{ data.name[0].toUpperCase() + data.name.slice(1) }</Text>
      <Text>Height: { data.height }</Text>
      <Text>Base Experience: { data.base_experience }</Text>
      <Text>Type: { data.types[0].type.name }</Text>
      <View>
      <Image
      style={ styles.image }
        source={{ uri: data.sprites.front_default }}
        onError={(error) => console.log("Error loading image:", error)}
      />
      </View>
    </View>
      <View style={styles.touchableContainer}>
        <TouchableOpacity
          style={styles.newButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.touchableText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.touchableContainer}>
        <TouchableOpacity
          style={styles.newButton}
          onPress={handleSearch}
        >
          <Text style={styles.touchableText}>Get Random Pokemon</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageBackGround: {
      flex: 1
  },
  container: {
      flex: 1
  },
  pokemonContainer: {
      borderWidth: 2,
      borderColor: "thistle",
      borderRadius: 50,
      padding: 10,
      flex: 1,
      alignItems: 'center',
      margin: 10
  },
  image: {
      borderRadius: 50,
      width: 200, 
      height: 200,
  },
  touchableContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'red'
    },
    newButton: {
      borderWidth: 2,
      borderColor: "thistle",
      borderRadius: 50,
      padding: 10,
      backgroundColor: 'blue',
    },
})

export default Random;
