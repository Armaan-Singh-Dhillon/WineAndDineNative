import { StyleSheet, Text, View ,Image} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useEffect, useState } from "react";
import { loadFonts } from "./expo-fonts";
import Home from "./screens/Home";
import Menu from "./screens/Menu";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [loading, setloading] = useState(true);

  const fetchfonts=async()=>{
    await loadFonts();
    setloading(false);
  }

  useEffect(() => {
    // Load and register custom fonts
    fetchfonts()
  }, []);

  if (loading == true) {
    return (
      <>
        <View style={{backgroundColor:'black',flex:1}}>
          <Image style={{width:'100%'}} resizeMode="contain" source={require('./assets/loader/loader.gif')}/>
        </View>
      </>
    );
  } else {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          {/* <Drawer.Screen name="Home" component={Home} /> */}
          <Drawer.Screen name="Menu" component={Menu} />
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
