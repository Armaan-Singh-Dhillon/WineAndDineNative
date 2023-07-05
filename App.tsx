import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { doc, getDoc } from "firebase/firestore";
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
import { BlogData } from "./types/blog";
import { StatusBar } from "expo-status-bar";
import Laurel from "./screens/Laurels";
import Faq from "./screens/Faq";
import History from "./screens/History";
import Button from "./styling Components/Button";
import H1 from "./styling Components/H1";
import Paragraph from "./styling Components/Paragraph";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Newsletter from "./screens/Newsletter";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { User } from "./types/user";
export type DishStackParamList = {
  Shop: undefined;
  Dish: { id: string };
};
export type BlogStackParamList = {
  Blog: undefined;
  SingleBlog: { id: string };
};

const Stack = createStackNavigator<DishStackParamList>();
const BlogStack = createStackNavigator<BlogStackParamList>();
const Drawer = createDrawerNavigator();

export default function App() {
  const [loading, setloading] = useState(true);
  const [dishData, setDishData] = useState<DishType[]>([]);
  const [blogData, setBlogData] = useState<BlogData[]>([]);
  const [isModal, setVisibility] = useState(false);
  const [isAccount, setAccount] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const auth = getAuth();

  const updateUser = (newValue: User) => {
    setUser(newValue);
  };
  const updateLoggedIn = (newValue: boolean) => {
    setLoggedIn(newValue);
  };

  const updateAccount = () => {
    setAccount(!isAccount);
  };
  const updateVisibility = () => {
    setVisibility(!isModal);
  };
  const updateDishData = (newValue: DishType[]) => {
    setDishData(newValue);
  };

  const updateBlogData = (newValue: BlogData[]) => {
    setBlogData(newValue);
  };
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchfonts = async () => {
    await loadFonts();
    setloading(false);
  };
  const fetchData = async () => {
    let blogDataTemp: BlogData[] = [];
    let productData: DishType[] = [];
    const querySnapshot1 = await getDocs(collection(db, "Blog"));
    querySnapshot1.forEach((doc) => {
      blogDataTemp = [
        ...blogDataTemp,
        { id: doc.id, ...doc.data() } as BlogData,
      ];
    });

    const querySnapshot2 = await getDocs(collection(db, "dishes"));
    querySnapshot2.forEach((doc) => {
      productData = [
        ...productData,
        { id: doc.id, show: false, ...doc.data() } as DishType,
      ];
    });
    setDishData(productData);
    setBlogData(blogDataTemp);

    await fetchfonts();

    onAuthStateChanged(auth, async (user) => {
      setloading(true);
      updateLoggedIn(false);
      if (user) {
        const res = await getDoc(doc(db, "user", user.uid));

        setUser({ ...res.data(), id: user.uid } as User);
        updateLoggedIn(true);
      } else {
        setUser(null);
      }
      setTimeout(() => {
        setloading(false);
      }, 4000);
    });
  };

  useEffect(() => {
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
            updateDishData,
            blogData,
            isModal,
            updateVisibility,
            updateBlogData,
            user,
            updateUser,
            isLoggedIn,
            updateLoggedIn,
          }}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="light" />
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
                  headerRight: () => (
                    <Button
                      text={`${isLoggedIn ? "Logout" : "Login"}`}
                      clickHandler={isLoggedIn ? logout : updateVisibility}
                    />
                  ),
                }}
              >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Menu" component={Menu} />
                <Drawer.Screen name="Our Shop" component={ShopScreens} />
                <Drawer.Screen name="Our Blog" component={BlogScreens} />
                <Drawer.Screen name="Our Laurels" component={Laurel} />
                <Drawer.Screen name="FAQs" component={Faq} />
                <Drawer.Screen name="Newsletter" component={Newsletter} />
                <Drawer.Screen name="Our History" component={History} />
              </Drawer.Navigator>
            </NavigationContainer>
            <Modal visible={isModal} animationType="fade">
              <View
                style={{
                  backgroundColor: "#242424",
                  flex: 1,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                {isAccount ? (
                  <Login changeLogic={updateAccount} />
                ) : (
                  <SignUp changeLogic={updateAccount} />
                )}

                <View
                  style={{
                    position: "absolute",
                    right: 0,
                  }}
                >
                  <Pressable onPress={updateVisibility}>
                    <Ionicons
                      name="close-circle-outline"
                      size={30}
                      color="#dcc87a"
                    />
                  </Pressable>
                </View>
                <View>
                  <Pressable onPress={updateVisibility}>
                    <Paragraph para="Close" />
                  </Pressable>
                </View>
              </View>
            </Modal>
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
