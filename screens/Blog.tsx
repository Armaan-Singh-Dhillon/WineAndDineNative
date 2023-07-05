import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import InnerH1 from "../styling Components/InnerH1";
import H2 from "../styling Components/H2";
import Paragraph from "../styling Components/Paragraph";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BlogStackParamList } from "../App";
import Subscription from "./Subscription";
import { useContext } from "react";
import { MyContext } from "../MyContext";
import H4 from "../styling Components/H4";

type SingleBlog = StackNavigationProp<BlogStackParamList, "SingleBlog">;

const Blog: React.FunctionComponent = () => {
  const { blogData } = useContext(MyContext);

  const navigation = useNavigation<SingleBlog>();

  const handleNavigation = (elId: string) => {
    navigation.navigate("SingleBlog", { id: elId });
  };
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "black",
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View style={{ position: "relative" }}>
            <View
              style={{
                zIndex: 2,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InnerH1 heading="Welcome To Our Blog" />
            </View>
            <Image
              style={{ width: "100%", height: 200, opacity: 0.6 }}
              resizeMode="cover"
              source={require("../assets/background/blogbackground.jpg")}
            />
          </View>
        </View>

        {blogData.map((el, i) => {
          return (
            <View style={{ marginTop: 20 }} key={i}>
              <Pressable onPress={() => handleNavigation(el.id)}>
                <Image
                  style={{ width: "100%", height: 350 }}
                  resizeMode="cover"
                  source={{
                    uri: el.image1,
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.tags}>{el.date}</Text>
                  <Text style={styles.tags}>- {el.writer.Postedby}</Text>
                </View>
                <Text
                  style={{
                    fontFamily: "primary",
                    color: "#fff",
                    fontSize: 15,
                    marginTop: 10,
                  }}
                >
                  {el.name}
                </Text>
                <Text
                  style={{
                    fontFamily: "primary",
                    color: "#dcca87",
                    fontSize: 20,
                  }}
                >
                  {el.mainTitle}
                </Text>
                <Paragraph para={el.intro} />
                <Text style={{ color: "#dcc87a", fontFamily: "primary" }}>
                  Read More
                </Text>
              </Pressable>
            </View>
          );
        })}
        <Subscription />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  tags: { color: "white", fontFamily: "secondary" },
});

export default Blog;
