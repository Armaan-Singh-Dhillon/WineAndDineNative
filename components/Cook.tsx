import { View, Image } from "react-native";
import Paragraph from "../styling Components/Paragraph";

type CookProp = {
  deliveryTime: number;
  averageTimeToCook: number;
  fatContent: number;
  proteinContent: number;
};

const Cook: React.FC<CookProp> = (props: CookProp) => {
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
          <Paragraph para={`Delievery Time : ${props.deliveryTime} min`} />
          <Paragraph
            para={`Average Time To Cook : ${props.averageTimeToCook} min`}
          />
          <Paragraph para={`Protein Content : ${props.proteinContent} g`} />
          <Paragraph para={`Fat Content : ${props.fatContent} g`} />
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
