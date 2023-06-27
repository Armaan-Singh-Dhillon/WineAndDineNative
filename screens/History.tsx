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
import TimelineHistory from "../components/TimelineHistory";
const History: React.FunctionComponent = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <H1 heading="History" />
        <InnerH1 heading="Timeline" />

        <TimelineHistory />
      </View>
    </>
  );
};

export default History;
