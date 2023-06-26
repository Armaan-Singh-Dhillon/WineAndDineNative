import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useEffect, useState, useContext } from "react";
import { loadFonts } from "./expo-fonts";
import Dish from "./screens/Dish";
import Shop from "./screens/Shop";
import Home from "./screens/Home";
import Menu from "./screens/Menu";
import Blog from "./screens/Blog";
import SingleBlog from "./screens/SingleBlog";
import { getDocs, collection } from "firebase/firestore";
import db from "./firebaseConfig";
import { MyContext } from "./MyContext";
import DishType from "./types/dish";
import Subscription from "./screens/Subscription";
export type DishStackParamList = {
  Shop: undefined;
  Dish: { id: string };
};
export type BlogStackParamList = {
  Blog: undefined;
  SingleBlog: undefined;
};

const Stack = createStackNavigator<DishStackParamList>();
const BlogStack = createStackNavigator<BlogStackParamList>();
const Drawer = createDrawerNavigator();

export default function App() {
  const [loading, setloading] = useState(true);
  const [dishData, setDishData] = useState<DishType[]>([]);

  const updateValue = (newValue: DishType[]) => {
    setDishData(newValue);
  };
  const fetchData = async () => {
    let blogDataTemp: any = [];
    let productData: DishType[] = [];
    // const querySnapshot1 = await getDocs(collection(db, "Blog"));
    // querySnapshot1.forEach((doc) => {
    //   blogDataTemp = [...blogDataTemp, { id: doc.id, ...doc.data() }];
    // });

    // const querySnapshot2 = await getDocs(collection(db, "dishes"));
    // querySnapshot2.forEach((doc) => {
    //   productData = [
    //     ...productData,
    //     { id: doc.id, show: false, ...doc.data() } as DishType,
    //   ];
    // });
    setDishData(productData);

    await fetchfonts();
  };

  const fetchfonts = async () => {
    await loadFonts();
    setloading(false);
  };

  useEffect(() => {
    // Load and register custom fonts
    fetchData();
  }, []);

  const ShopScreens = () => {
    return (
      <>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: "black",
            },
          }}
        >
          <Stack.Screen name="Shop" component={Shop} />
          <Stack.Screen name="Dish" component={Dish} />
        </Stack.Navigator>
      </>
    );
  };
  const BlogScreens = () => {
    return (
      <>
        <BlogStack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: "black",
            },
          }}
        >
          <BlogStack.Screen name="Blog" component={Blog} />
          <BlogStack.Screen name="SingleBlog" component={SingleBlog} />
        </BlogStack.Navigator>
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
      <>
        <MyContext.Provider
          value={{
            dishData,
            updateValue,
          }}
        >
          <SafeAreaView style={{ flex: 1 }}>
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
                  drawerStyle: {
                    backgroundColor: "#242424",
                    width: 240,
                  },
                  drawerActiveTintColor: "#dcc87a",
                  drawerInactiveTintColor: "#aaa",
                  drawerLabelStyle: {
                    fontFamily: "primary",
                    fontSize: 20,
                  },
                }}
              >
                {/* <Drawer.Screen name="Home" component={Home} /> */}
                {/* <Drawer.Screen name="Menu" component={Menu} /> */}
                {/* <Drawer.Screen name="Our Shop" component={ShopScreens} /> */}
                <Drawer.Screen name="Newsletter" component={Subscription} />
                {/* <Drawer.Screen name="Our Blog" component={BlogScreens} /> */}
              </Drawer.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </MyContext.Provider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});
