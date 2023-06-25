import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import H1 from "../styling Components/H1";
import H2 from "../styling Components/H2";
import H3 from "../styling Components/H3";
import H4 from "../styling Components/H4";
import Paragraph from "../styling Components/Paragraph";

const Supplements = () => {
  const dishData = {
    supplements: {
      beverages: [
        {
          name: "Iced Lemon Tea",
          description:
            "A refreshing iced tea infused with zesty lemon flavor. Perfect to accompany your salad.",
        },
        {
          name: "Mineral Water",
          description:
            "Pure and natural mineral water that provides hydration without any added flavors or sweeteners.",
        },
      ],
      foodDrinks: [
        {
          name: "Garlic Breadsticks",
          description:
            "Oven-baked breadsticks seasoned with garlic and served with a side of marinara sauce. A tasty addition to your salad meal.",
        },
        {
          name: "Fruit Bowl",
          description:
            "A bowl of assorted fresh fruits, including seasonal favorites. A healthy and refreshing choice for a light snack.",
        },
      ],
    },
  };
  return (
    <>
      <View>
        <H2 heading="Supplements" />
        {dishData.supplements.foodDrinks.length != 0 && (
          <View>
            <Text
              style={{
                color: "#dcc87a",
                fontFamily: "primary",
                fontSize: 25,
              }}
            >
              Food Drinks
            </Text>
            <View>
              {dishData.supplements.foodDrinks.map((el) => {
                return (
                  <>
                    <H4 heading={el.name} />
                    <Paragraph para={el.description} />
                  </>
                );
              })}
            </View>
          </View>
        )}
        {dishData.supplements.beverages.length != 0 && (
          <View>
            <Text
              style={{
                color: "#dcc87a",
                fontFamily: "primary",
                fontSize: 25,
              }}
            >
              Beverages
            </Text>
            <View>
              {dishData.supplements.beverages.map((el) => {
                return (
                  <>
                    <H4 heading={el.name} />
                    <Paragraph para={el.description} />
                  </>
                );
              })}
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default Supplements;
