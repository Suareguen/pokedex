import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ImageBackground,
    Platform,
    Button,
    Alert,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  import eevee from "../../assets/eevee.jpeg";
import { useState } from "react";
import {
    QueryClient,
    QueryClientProvider,
  } from 'react-query'

  const queryClient = new QueryClient()
  
  
  export default function Home({ navigation }) {
    const [input, setInput] = useState('')
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={eevee} resizeMode="cover" style={styles.image}>
          <View style={styles.containerText}>
            <Text style={Platform.OS === "android" ? styles.android : styles.ios}>
              PokeApp
            </Text>
          </View>
          <View style={ styles.inputContainer }>
            <Text style={styles.text}>Search Pokemon</Text>
            <TextInput style={styles.input} value={ input } onChangeText={(text) => setInput(text)}/>
            <Text >{ input }</Text>
          </View>
          <View style={styles.button}>
            <Button
              title="Search"
              onPress={() => navigation.navigate('Pokemon', {
                name: input
              })}
            />
          </View>
          <View style={ styles.touchableContainer}>
            <TouchableOpacity style={styles.newButton} onPress={() => navigation.navigate('Pokedex')}>
              <Text style={styles.touchableText}>Go to Pokedex</Text>
            </TouchableOpacity>
          </View>
          <View style={ styles.touchableContainer}>
            <TouchableOpacity style={styles.newButton} onPress={() => navigation.navigate('Random')}>
              <Text style={styles.touchableText}>Get Random Pokemon</Text>
            </TouchableOpacity>
          </View>
          <StatusBar />
        </ImageBackground>
      </SafeAreaView>
    );
  }
  
  // El SafeAreaView lo que hace es tener en cuenta la cámara del
  // dispositivo se cuente a la hora de mmostrarse el contenido y que este no se vea
  // tapado por la misma cámara u otro componente del dispositivo que
  // pueda hacer que tape nuestro contenido.
  
  // El StatusBar lo que hace es tener en cuenta el menú desplegable
  // que tienen los dispositivos para no superponer nuestro contenido con el mismo,
  // además nos permite configurar ese menú desplegable como queramos
  
  // La mezccla de los dos nos permite que el safe area view coja la altura del status bar
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
        color: 'blue'
    },
    android: {
      color: "blue",
      fontSize: 50,
      fontWeight: "bold",
    },
    ios: {
      color: "red",
    },
    button: {
      width: "100%",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: 'blue'
    },
    containerText: {
      flex: 1,
      // backgroundColor: 'white',
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      height: "100%",
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
    touchableText: {
      color: 'white'
    },
    input: {
        width: '50%',
        backgroundColor: 'white',
    },
    inputContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'center'
    }
  });
  