import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import InnerH1 from "../styling Components/InnerH1";
import { Ionicons } from "@expo/vector-icons";
import Paragraph from "../styling Components/Paragraph";
import H2 from "../styling Components/H2";
import H3 from "../styling Components/H3";
import Pointers from "../styling Components/Points";
const SingleBlog = () => {
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "black", padding: 15 }}>
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
            <InnerH1 heading="Delicious " />
          </View>
          <Image
            style={{ width: "100%", height: 200, opacity: 0.6 }}
            resizeMode="cover"
            source={require("../assets/blogs/blog-test.jpg")}
          />
        </View>
        <View>
          <Image
            style={{ width: "100%", height: 350, marginTop: 20 }}
            source={require("../assets/blogs/delicious-desserts/image1.jpg")}
          />
          <View style={styles.outer}>
            <View style={styles.inner}>
              <Ionicons
                name="person-circle-outline"
                size={25}
                style={styles.icon}
                color="#dcc87a"
              />
              <Text style={styles.nameline}>Annalisa L</Text>
            </View>
            <View style={styles.inner}>
              <Ionicons
                name="calendar"
                style={styles.icon}
                size={25}
                color="#dcc87a"
              />
              <Text style={styles.nameline}>August 14 ,2021</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.heading}>
            Uncovering Hidden Gems In The Restaurant Scene
          </Text>
        </View>
        <Paragraph para="The process of uncovering hidden gems can involve several steps. First, food critics and bloggers may conduct research to find out about lesser-known restaurants in the area. " />
        <Paragraph para="After visiting a hidden gem, food critics and bloggers may write about their experience in reviews, blog posts, or social media posts. They may also recommend the restaurant to others through word of mouth or by featuring it in articles or on their website." />
        <Text style={styles.heading}>
          Uncovering Hidden Gems In The Restaurant Scene
        </Text>
        <View>
          <Pointers para="Look beyond popular areas: While popular areas may have a lot of great restaurants, it's worth exploring lesser-known" />
          <Pointers para="Look beyond popular areas: While popular areas may have a lot of great restaurants, it's worth exploring lesser-known" />
          <Pointers para="Look beyond popular areas: While popular areas may have a lot of great restaurants, it's worth exploring lesser-known" />
        </View>
        <View>
          <View style={styles.inner}></View>
        </View>
        <View style={styles.qouteContainer}></View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  inner: { flexDirection: "row", alignItems: "center" },
  nameline: { color: "#fff", fontFamily: "ternary" },
  icon: { marginRight: 4 },
  outer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },
  heading: {
    color: "#dcca87",
    fontFamily: "primary",
    fontSize: 26,
    marginBottom: 10,
  },
  quote: {
    fontFamily: "cursive",
    color: "white",
    fontSize: 20,
  },
  qouteContainer: {
    borderColor: "#dcc87a",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
export default SingleBlog;
