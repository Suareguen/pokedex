import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from "react-native";
import { getAllPokemons } from "../services/pokemonService";
import { useQuery } from "react-query";
import pokeball from "../../assets/pokedex.jpeg";
import { useMutation } from "react-query";
import { addToFavourites } from "../services/pokemonService";


const Pokedex = ({ navigation }) => {
  const { mutate } = useMutation( addToFavourites )
  const { isLoading, isError, data, error } = useQuery("pokemons", () =>
    getAllPokemons()
  );
  const [pokemons, setPokemons] = useState(data)
  useEffect(()=> {

  },[])
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  const handleAddFavourites = (name) => {
    const obj = {
      name: name
    }
    mutate(obj)
  }

  const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.touchableContainer}>
        <TouchableOpacity
          style={styles.newButton}
          onPress={() => navigation.navigate("Pokemon",{
            name: name
          })}
        >
          <Text style={styles.touchableText}>View More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.touchableContainer}>
        <TouchableOpacity
          style={styles.newButton}
          onPress={() => handleAddFavourites( name )}
        >
          <Text style={styles.touchableText}>Add Favourites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <>
      <ImageBackground
        source={pokeball}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <SafeAreaView style={styles.container}>
          <FlatList
            data={data.results}
            renderItem={({ item }) => <Item name={item.name} />}
            keyExtractor={(item) => item.name}
          />
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 16,
  },
  imageBackground: {
    flex: 1,
  },
});

export default Pokedex;
