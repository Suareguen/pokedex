import Home from "./src/screens/Home";
import Pokedex from "./src/screens/Pokedex";
import Random from "./src/screens/Random";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { QueryClient, QueryClientProvider } from "react-query";
import Pokemon from "./src/screens/Pokemon";
import { Text } from "react-native";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Pokemon" component={Pokemon} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Tab.Navigator>
            <Tab.Screen
              name="HomeStack"
              component={HomeStack}
              options={{ headerShown: false }}
            />
            <Tab.Screen name="Pokedex" component={Pokedex} />
            <Tab.Screen name="Random Pokemon" component={Random} />
          </Tab.Navigator>
        </QueryClientProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}

// AppRegistry.registerComponent(appName, () => Main);
