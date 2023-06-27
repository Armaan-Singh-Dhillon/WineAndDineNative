import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import H1 from "../styling Components/H1";
import H2 from "../styling Components/H2";
import Paragraph from "../styling Components/Paragraph";
import Button from "../styling Components/Button";
import H4 from "../styling Components/H4";
import Quotes from "../styling Components/Quotes";
import Subscription from "./Subscription";
import InnerH1 from "../styling Components/InnerH1";
import FAQ from "../styling Components/FaqDrops";
import { CountUp } from "use-count-up";
import Timeline from "../components/TimelineHistory";
const History: React.FunctionComponent = () => {
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
    // Add more timeline items as needed
  ];
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
        <H1 heading="History" />
        <InnerH1 heading="Timeline" />
        <View style={{ flex: 1 }}>
          <Timeline data={timelineData} />
        </View>
        <View>
          <Text style={styles.text}>
            <CountUp isCounting={true} end={30} duration={3.2} />+
          </Text>
          <InnerH1 heading="Breakfast Options" />
        </View>
        <View>
          <Text style={styles.text}>
            <CountUp isCounting={true} end={50} duration={3.2} />
          </Text>
          <InnerH1 heading="Dinner Options" />
        </View>
        <View>
          <Text style={styles.text}>
            <CountUp isCounting={true} end={52} duration={3.2} />+
          </Text>
          <InnerH1 heading=" Tables Available" />
        </View>
        <View>
          <Text style={styles.text}>
            <CountUp isCounting={true} end={20} duration={3.2} />+
          </Text>
          <InnerH1 heading="Years Of Experience" />
        </View>
        <Subscription />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "secondary",
    color: "#dcc87a",
    fontSize: 48,
    textAlign: "center",
  },
});
export default History;
