import { Text, View } from "react-native";
import H2 from "../styling Components/H2";
import H4 from "../styling Components/H4";
import Paragraph from "../styling Components/Paragraph";

type Beverage = {
  name: string;
  description: string;
};

type FoodDrink = {
  name: string;
  description: string;
};

type Supplements = {
  beverages: Beverage[];
  foodDrinks: FoodDrink[];
};

const Supplements: React.FC<Supplements> = (props: Supplements) => {
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
        {props.foodDrinks.length != 0 && (
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
              {props.foodDrinks.map((el, i) => {
                return (
                  <View key={i}>
                    <H4 heading={el.name} />
                    <Paragraph para={el.description} />
                  </View>
                );
              })}
            </View>
          </View>
        )}
        {props.beverages.length != 0 && (
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
              {props.beverages.map((el, i) => {
                return (
                  <View key={i}>
                    <H4 heading={el.name} />
                    <Paragraph para={el.description} />
                  </View>
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
