import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import H2 from "../styling Components/H2";
import H4 from "../styling Components/H4";
import Paragraph from "../styling Components/Paragraph";

const Ingredients: React.FunctionComponent = () => {
  const dishData = {
    ingredients: {
      herbs: [
        {
          name: "Khmeli Suneli",
          description:
            "This fragrant Georgian spice is mixed with fenugreek, marigold petals, coriander, black pepper, dill, mint, and bay leaf. It has warm, bitter, nutty, and grassy flavors.",
          uses: [
            "Used in stews and meat dishes",
            "Adds flavor to roasted vegetables and bean soups",
          ],
        },
        {
          name: "Basil",
          description:
            "Basil is a versatile herb that goes well with baked fish, tomatoes, and tomato salads. It adds freshness and flavor to dishes.",
        },
      ],
      spices: [
        {
          name: "Pimentón de la Vera",
          description:
            "Pimentón de la Vera is a smoked paprika made by crushing dried peppers into a fragrant and smoky powder. It adds a unique flavor to various dishes.",
        },
      ],
      cheese: [
        {
          name: "Parmesan Reggiano",
          description:
            "Parmesan Reggiano is a hard, dry, fruity, and nutty-flavored cheese made from raw skimmed milk of cows. It is commonly used as a grating cheese.",
        },
        {
          name: "Feta",
          description:
            "Feta is a brined cheese produced with unpasteurized or pasteurized milk. It has a tangy flavor and crumbly texture, often used in salads and Greek cuisine.",
        },
      ],
    },
  };
  return (
    <>
      <View>
        <H2 heading="Ingredients" />
        <View>
          {Object.entries(dishData.ingredients).map(([key, value]) => {
            if (value.length != 0) {
              return (
                <>
                  <Text
                    style={{
                      color: "#dcc87a",
                      fontFamily: "primary",
                      fontSize: 25,
                    }}
                  >
                    {key}
                  </Text>

                  {value.map((el) => {
                    return (
                      <>
                        <View>
                          <H4 heading={el.name} />
                          <Paragraph para={el.description} />
                        </View>
                      </>
                    );
                  })}
                </>
              );
            }
            return <></>;
          })}
        </View>
      </View>
    </>
  );
};

export default Ingredients;
