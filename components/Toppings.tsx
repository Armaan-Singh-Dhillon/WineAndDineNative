import { View } from "react-native";
import Checks from "../styling Components/Checks";
import H2 from "../styling Components/H2";
import H4 from "../styling Components/H4";

type Options = {
  options: {
    toppings: string[];
    sauce: string[];
    spiceLevel: string[];
  };
};
function areAllArraysEmpty(options: Options): boolean {
  const { toppings, sauce, spiceLevel } = options.options;
  return (
    (!toppings || toppings.length === 0) &&
    (!sauce || sauce.length === 0) &&
    (!spiceLevel || spiceLevel.length === 0)
  );
}
const Toppings: React.FC<Options> = (props: Options) => {
  if (areAllArraysEmpty(props)) {
    return <></>;
  } else {
    return (
      <>
        <View>
          <H2 heading="Toppings And Add-Ons" />

          {Object.entries(props.options).map(([key, value], i) => {
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
  }
};

export default Toppings;
