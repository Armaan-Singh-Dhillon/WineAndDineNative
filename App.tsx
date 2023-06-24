import { StyleSheet, Text, View, Image, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useEffect, useState } from "react";
import { loadFonts } from "./expo-fonts";
import Dish from "./screens/Dish";
import Shop from "./screens/Shop";
import Home from "./screens/Home";
import Menu from "./screens/Menu";

 export type DishStackParamList = {
   Shop: undefined;
   Dish: undefined;
 };

const Stack = createStackNavigator<DishStackParamList>();
const Drawer = createDrawerNavigator();




export default function App() {
  const [loading, setloading] = useState(true);

  const fetchfonts = async () => {
    await loadFonts();
    setloading(false);
  };

  useEffect(() => {
    // Load and register custom fonts
    fetchfonts();
  }, []);

  const ShopScreens = () => {
    return (
      <>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Shop" component={Shop} />
          <Stack.Screen name="Dish" component={Dish} />
        </Stack.Navigator>
      </>
    );
  };

  if (loading == true) {
    return (
      <>
        <View style={{ backgroundColor: "black", flex: 1 }}>
          <Image
            style={{ width: "100%" }}
            resizeMode="contain"
            source={require("./assets/loader/loader.gif")}
          />
        </View>
      </>
    );
  } else {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerTitleStyle: {
              fontFamily: "primary",
              color: "#fff",
            },
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#242424",
            },
          }}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Menu" component={Menu} />
          <Drawer.Screen name="Shop" component={ShopScreens} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
