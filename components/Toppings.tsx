import { View } from "react-native";
import Checks from "../styling Components/Checks";
import H2 from "../styling Components/H2";
import H4 from "../styling Components/H4";
const Toppings: React.FC = () => {
  const dishData = {
    options: {
      toppings: ["Extra veggies", "Fried egg", "Crushed peanuts"],
      sauce: ["Sweet chili sauce", "Fish sauce", "Soy sauce"],
      spiceLevel: ["Mild", "Medium", "Spicy"],
    },
  };
  return (
    <>
      <View>
        <H2 heading="Toppings And Add-Ons" />

        {Object.entries(dishData.options).map(([key, value], i) => {
          if (value.length != 0) {
            return (
              <View key={i}>
                <H4 heading={key} />
                {value.map((el, i) => {
                  return (
                    <View key={i}>
                      <Checks text={el} />
                    </View>
                  );
                })}
              </View>
            );
          }
        })}
      </View>
    </>
  );
};

export default Toppings;
