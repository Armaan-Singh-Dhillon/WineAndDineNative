import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import H2 from "../styling Components/H2";
import StarRating from "../components/Star";
import InnerH3 from "../styling Components/InnerH3";
import Paragraph from "../styling Components/Paragraph";
import H3 from "../styling Components/H3";
import Tag from "../styling Components/Tag";
import Cook from "../components/Cook";
import Ingredients from "../components/Ingredients";
import Supplements from "../components/Supplements";
import Review from "../components/Review";
import SalesAndOffers from "../components/SalesAndOffers";
import Toppings from "../components/Toppings";
const Dish: React.FC = () => {
  return (
    <>
      <ScrollView style={styles.root}>
        <View>
          <View>
            <Image
              resizeMode="cover"
              style={{ width: "100%", height: 300 }}
              source={require("../assets/dishes/butter-chicken.jpg")}
            />
            <H2 heading="Butter-Chicken" />
            <StarRating rating={4} />
            <InnerH3 heading="Price : $14" />
            <Paragraph para="Savor the flavors of a perfectly grilled salmon fillet. The salmon is seasoned with a delightful lemon pepper blend, resulting in a juicy and flavorful dish." />
            <H3 heading="Type : Main Course" />
            <InnerH3 heading="Tags" />
            <View style={styles.tagContainer}>
              <Tag text="Aromatic" />
              <Tag text="spicy" />
              <Tag text="Chilly" />
            </View>
            <Toppings />
            <Cook />
            <Ingredients />
            <Supplements />
            <Review />
            <SalesAndOffers />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default Dish;
