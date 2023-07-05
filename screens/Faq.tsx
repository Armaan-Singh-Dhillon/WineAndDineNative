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
const Faq: React.FunctionComponent = () => {
  const data = [
    {
      question: "What are the restaurant's opening hours?",
      answer: "We are open from 12:00 PM to 10:00 PM, Monday to Sunday.",
    },
    {
      question: "Do I need to make a reservation?",

      answer:
        "While walk-ins are welcome, we highly recommend making a reservation, especially during busy hours, to ensure a table is available for you.",
    },
    {
      question: "Does the restaurant have vegetarian/vegan options?",
      answer:
        "Yes, we offer a variety of vegetarian and vegan dishes. Our menu is designed to cater to different dietary preferences and restrictions.",
    },
    {
      question: "Is there a dress code?",
      answer:
        "We encourage smart casual attire. While formal attire is not mandatory, we appreciate guests dressing up to enhance the dining experience.",
    },
    {
      question: "Can I bring my own wine?",
      answer:
        "We have an extensive wine selection available, and we kindly ask that you do not bring your own wine. Our sommelier will be happy to assist you in choosing the perfect wine to accompany your meal.",
    },
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
        <H1 heading="FAQs" />
        <Image
          style={{
            width: "100%",
            height: 400,
          }}
          resizeMode="contain"
          source={require("../assets/background/Faq.png")}
        />
        <FAQ faqs={data} />
        <Subscription />
      </ScrollView>
    </>
  );
};

export default Faq;
