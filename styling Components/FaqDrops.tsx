import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCollapse = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <View>
      {faqs.map((faq, index) => (
        <View style={{ borderColor: "#dcc87a", borderWidth: 1, marginTop: 20 }}>
          <TouchableOpacity
            key={index}
            style={styles.questionContainer}
            onPress={() => toggleCollapse(index)}
          >
            <Text style={styles.questionText}>{faq.question}</Text>
          </TouchableOpacity>
          <Collapsible collapsed={activeIndex !== index}>
            <Text style={styles.answerText}>{faq.answer}</Text>
          </Collapsible>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#242424",
  },
  questionText: {
    flex: 1,
    color: "#dcc87a",
    fontFamily: "primary",
    fontSize: 22,
  },

  answerText: {
    padding: 10,
    backgroundColor: "#000",
    color: "#aaa",
    fontFamily: "ternary",
  },
});

export default FAQ;
