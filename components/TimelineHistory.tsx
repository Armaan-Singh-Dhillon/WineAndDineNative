import React from "react";
import { StyleSheet, View } from "react-native";
import Timeline from "react-native-timeline-flatlist";

export default function TimelineHistory() {
  const timelineData = [
    {
      time: "1930",
      title: "Restaurant Inauguration",
      description: "The luxury restaurant opens its doors for the first time.",
    },
    {
      time: "1940",
      title: "Expansion of Cuisines",
      description: "Introduction of French and Italian cuisines to the menu.",
    },
    {
      time: "1955",
      title: "Renovation and Redesign",
      description:
        "The restaurant undergoes a major renovation and revamps its interior design.",
    },
    {
      time: "1962",
      title: "Increase in Staff",
      description:
        "Expansion of the restaurant's team to cater to growing demand.",
    },
    {
      time: "1975",
      title: "Receiving Michelin Star",
      description:
        "The restaurant is awarded a prestigious Michelin star for culinary excellence.",
    },
    {
      time: "1988",
      title: "Launch of Signature Dish",
      description:
        "The restaurant introduces its iconic signature dish, becoming a customer favorite.",
    },
    {
      time: "2005",
      title: "Expansion to International Locations",
      description:
        "The restaurant opens branches in major cities around the world.",
    },
    {
      time: "2012",
      title: "Celebrity Chef Collaboration",
      description:
        "Renowned celebrity chef partners with the restaurant for an exclusive menu.",
    },
    {
      time: "2020",
      title: "Receiving James Beard Award",
      description:
        "The restaurant is honored with a prestigious James Beard Award.",
    },
  ];

  return (
    <View style={styles.container}>
      <Timeline
        data={timelineData}
        circleSize={10}
        circleColor="#dcc87a"
        lineColor="#dcc87a"
        timeContainerStyle={{ minWidth: 91, marginTop: -5 }}
        timeStyle={{
          textAlign: "center",
          color: "white",
          padding: 5,
          fontFamily: "secondary",
        }}
        descriptionStyle={{ color: "#aaa", fontFamily: "secondary" }}
        lineWidth={1}
        columnFormat="single-column-left"
        separator={true}
        titleStyle={{
          fontSize: 15,
          color: "#dcc87a",
          fontFamily: "primary",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#000",
  },
});
