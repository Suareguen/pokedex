import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getPokemon } from "../services/pokemonService";
import { useQuery } from 'react-query'
import eevee from '../../assets/eevee.jpeg'
const Pokemon = ({ navigation, route }) => {
  const { name } = route.params
  const { isLoading, isError, data, error } = useQuery('pokemon',() => getPokemon( name.toLowerCase() ))
  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>
  }
  return (
    <ImageBackground style={ styles.imageBackGround } source={ eevee }>
    <View  style={styles.container}>
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
    <View style={ styles.touchableContainer}>
            <TouchableOpacity style={ styles.newButton } onPress={() => navigation.navigate('Home')}>
              <Text style={ styles.touchableText }>Go to Home</Text>
            </TouchableOpacity>
          </View>
    </View>
    </ImageBackground>
  )
}

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

export default Pokemon;
