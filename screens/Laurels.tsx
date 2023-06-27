import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import H1 from "../styling Components/H1";
import H2 from "../styling Components/H2";
import Paragraph from "../styling Components/Paragraph";
import Button from "../styling Components/Button";
import H4 from "../styling Components/H4";
import Quotes from "../styling Components/Quotes";
import Subscription from "./Subscription";
import InnerH1 from "../styling Components/InnerH1";
const Laurel: React.FunctionComponent = () => {
  const handleCLick = () => {};
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
        <H4 heading="Awards And recognition" />
        <H1 heading="Our Laurels" />
        <View>
          <View>
            <Image
              style={styles.award}
              resizeMode="contain"
              source={require("../assets/awards/aw1.png")}
            />
            <View style={styles.abscenter}>
              <Text style={styles.text}>1</Text>
            </View>
          </View>
          <Text style={styles.title}>Rising Star</Text>
          <Paragraph para="We are thrilled to be recognized as a Rising Star in the culinary world. This prestigious award celebrates our dedication to innovation, creativity, and pushing the boundaries of gastronomy. Join us on a journey of culinary discovery as our talented team creates extraordinary dishes that will tantalize your taste buds and leave you wanting more." />
        </View>
        <Image
          style={styles.mainImage}
          resizeMode="cover"
          source={require("../assets/awards/laurel.jpg")}
        />
        <View style={styles.section}>
          <View>
            <Image
              style={styles.award}
              resizeMode="contain"
              source={require("../assets/awards/aw2.png")}
            />
          </View>
          <Text style={styles.title}>Bib Gourmond</Text>
          <Paragraph para="Our restaurant is proud to have been awarded the prestigious Bib Gourmand recognition. This esteemed accolade is a testament to our commitment to providing exceptional dining experiences at an affordable price. Come and indulge in our culinary delights, where quality and value go hand in hand." />
        </View>
        <View style={styles.section}>
          <View>
            <Image
              style={styles.award}
              resizeMode="contain"
              source={require("../assets/awards/aw3.png")}
            />
            <View style={styles.abscenter}>
              <Text style={styles.text}>3</Text>
            </View>
          </View>
          <Text style={styles.title}>Outstanding Chef</Text>
          <Paragraph para="Our chef has been recognized as an Outstanding Chef, an accolade that acknowledges their exceptional culinary skills and visionary approach to gastronomy. With their expertise and creativity, they craft extraordinary dishes that showcase the finest ingredients and innovative techniques. Join us for a dining experience curated by an extraordinary talent that will redefine your perception of food." />
        </View>
        <View style={styles.section}>
          <View>
            <Image
              style={styles.award}
              resizeMode="contain"
              source={require("../assets/awards/aw4.png")}
            />
          </View>
          <Text style={styles.title}>AA Hospitality</Text>
          <Paragraph para="We are honored to have received the AA Hospitality award, a symbol of excellence in the industry. With meticulous attention to detail and a passion for delivering impeccable service, we strive to create unforgettable dining experiences for our guests. Visit us and savor the finest flavors, complemented by an ambiance that reflects our commitment to hospitality." />
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  mainImage: {
    width: "100%",
    height: 350,
  },
  award: {
    width: "100%",
    height: 300,
  },
  section: {
    marginTop: 20,
  },
  abscenter: {
    zIndex: 2,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#dcc87a",
    fontFamily: "primary",
    fontSize: 30,
    textAlign: "center",
  },
  text: {
    color: "#dcc87a",
    fontFamily: "primary",
    fontSize: 80,
  },
});

export default Laurel;
