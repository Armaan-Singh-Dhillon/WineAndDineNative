import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import InnerH1 from "../styling Components/InnerH1";
import { Ionicons } from "@expo/vector-icons";
import Paragraph from "../styling Components/Paragraph";
import Subscription from "./Subscription";
import { Video, ResizeMode } from "expo-av";
import Pointers from "../styling Components/Points";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { BlogStackParamList } from "../App";
import { MyContext } from "../MyContext";
import { useContext } from "react";
const SingleBlog = () => {
  const { blogData } = useContext(MyContext);
  const route = useRoute<RouteProp<BlogStackParamList, "SingleBlog">>();
  const desiredId = route.params.id;

  const filteredObject = blogData.find((el) => el.id === desiredId)!;

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
            <InnerH1 heading={filteredObject.name} />
          </View>
          <Image
            style={{ width: "100%", height: 200, opacity: 0.6 }}
            resizeMode="cover"
            source={require("../assets/background/blogbackground.jpg")}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Image
            style={{ width: "100%", height: 350 }}
            resizeMode="cover"
            source={{
              uri: filteredObject.image1,
            }}
          />
          <View style={styles.outer}>
            <View style={styles.inner}>
              <Ionicons
                name="person-circle-outline"
                size={25}
                style={styles.icon}
                color="#dcc87a"
              />
              <Text style={styles.nameline}>
                {filteredObject.writer.Postedby}
              </Text>
            </View>
            <View style={styles.inner}>
              <Ionicons
                name="calendar"
                style={styles.icon}
                size={25}
                color="#dcc87a"
              />
              <Text style={styles.nameline}>{filteredObject.date}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.heading}>{filteredObject.mainTitle}</Text>
        </View>
        <Paragraph para={filteredObject.intro} />
        <Paragraph para={filteredObject.subpara} />
        <Text style={styles.heading}>{filteredObject.subtitle1}</Text>
        <View>
          <Pointers para={filteredObject.pointsintro.point1} />
          <Pointers para={filteredObject.pointsintro.point2} />
          <Pointers para={filteredObject.pointsintro.point3} />
        </View>

        <Video
          source={{
            uri: filteredObject.video,
          }}
          style={{ width: "100%", height: 300 }}
          shouldPlay
          isLooping
        />
        <Paragraph para={filteredObject.videopara} />

        <View style={styles.qouteContainer}>
          <Text style={styles.quote}>{filteredObject.quote}</Text>
          <Text style={styles.nameline}>-{filteredObject.writer.Postedby}</Text>
        </View>
        <Paragraph para={filteredObject.outropara} />
        <Text style={styles.heading}>{filteredObject.outroTitle}</Text>
        <View>
          <Pointers para={filteredObject.pointsoutro.point1} />
          <Pointers para={filteredObject.pointsoutro.point2} />
          <Pointers para={filteredObject.pointsoutro.point3} />
        </View>
        <View style={styles.qouteContainer}>
          <Text style={styles.quote}>{filteredObject.finalWords}</Text>
        </View>
        <Text style={styles.nameline}>-{filteredObject.writer.Postedby}</Text>
        <Subscription />
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
