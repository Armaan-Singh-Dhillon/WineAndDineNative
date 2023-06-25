import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import H1 from "../styling Components/H1";
import Paragraph from "../styling Components/Paragraph";

const Cook: React.FC = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: "#242424",
          borderColor: "#aaa",
          borderStyle: "dotted",
          borderWidth: 1,
          padding: 15,
        }}
      >
        <View>
          <Paragraph para="Delievery Time : 15 min" />
          <Paragraph para="Avergae Time To Cook : 15 min" />
          <Paragraph para="Fat Content : 15 min" />
          <Paragraph para="Delievery Time : 15 min" />
          <Paragraph para="Protein Content : 15 min" />
        </View>

        <Image
          style={{ width: "100%" }}
          resizeMode="contain"
          source={require("../assets/logos/cook.png")}
        />
      </View>
    </>
  );
};

export default Cook;
