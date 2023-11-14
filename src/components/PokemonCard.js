import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const PokemonCard = ({ data }) => {
  console.log(data.name);
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.content}>
        <Text variant="titleLarge">
          {data.name[0].toUpperCase() + data.name.slice(1)}
        </Text>
        <Text variant="bodyMedium">Height: {data.height}</Text>
        <Text variant="bodyMedium">
          Base Experience: {data.base_experience}
        </Text>
        <Text variant="bodyMedium">Type: {data.types[0].type.name[0].toUpperCase() + data.types[0].type.name.slice(1)}</Text>
        {/* <Text  variant="bodyMedium">Description: {description}</Text> */}
      </Card.Content>
      <View style={styles.imageContainer}>
        <Card.Cover
          source={{ uri: data.sprites.front_default }}
          style={styles.image}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  content: {
    width: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 50,
    width: "100%",
    height: "35%",
    alignItems: "center",
  },
  image: {
    width: "50%",
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
});

export default PokemonCard;
