import { Text, View } from "react-native";
import H2 from "../styling Components/H2";
import H4 from "../styling Components/H4";
import Paragraph from "../styling Components/Paragraph";

type Herb = {
  name: string;
  description: string;
};

type Cheese = {
  name: string;
  description: string;
};
type Spice = {
  name: string;
  description: string;
};

type Ingredients = {
  ingredients: {
    herbs: Herb[];
    spices: Spice[];
    cheese: Cheese[];
  };
};
const Ingredients: React.FunctionComponent<Ingredients> = (
  props: Ingredients
) => {
  return (
    <>
      <View>
        <H2 heading="Ingredients" />
        <View>
          {Object.entries(props.ingredients).map(([key, value], i) => {
            if (value.length != 0) {
              return (
                <View key={i}>
                  <Text
                    style={{
                      color: "#dcc87a",
                      fontFamily: "primary",
                      fontSize: 25,
                    }}
                  >
                    {key}
                  </Text>

                  {value.map((el, i) => {
                    return (
                      <View key={i}>
                        <H4 heading={el.name} />
                        <Paragraph para={el.description} />
                      </View>
                    );
                  })}
                </View>
              );
            }
          })}
        </View>
      </View>
    </>
  );
};

export default Ingredients;
