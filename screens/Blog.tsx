import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import InnerH1 from "../styling Components/InnerH1";
import H4 from "../styling Components/H4";
import H2 from "../styling Components/H2";
import Paragraph from "../styling Components/Paragraph";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BlogStackParamList } from "../App";

type SingleBlog = StackNavigationProp<BlogStackParamList, "SingleBlog">;

const Blog: React.FunctionComponent = () => {
  const navigation = useNavigation<SingleBlog>();

  const handleNavigation = () => {
    navigation.navigate("SingleBlog");
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
              source={require("../assets/blogs/blog-test.jpg")}
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Pressable onPress={handleNavigation}>
            <Image
              style={{ width: "100%", height: 350 }}
              resizeMode="cover"
              source={require("../assets/blogs/delicious-desserts/image1.jpg")}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.tags}>August 14 ,2021</Text>
              <Text style={styles.tags}>-Annalisa L</Text>
            </View>

            <H2 heading="Exercise After Eating, A Very Important Step" />
            <Paragraph para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in" />
            <Text style={{ color: "#dcc87a", fontFamily: "primary" }}>
              Read More
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  tags: { color: "white", fontFamily: "secondary" },
});

export default Blog;
