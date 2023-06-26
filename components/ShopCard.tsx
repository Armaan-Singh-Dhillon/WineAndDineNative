import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import H4 from "../styling Components/H4";
import StarRating from "./Star";
import { StackNavigationProp } from "@react-navigation/stack";
import { DishStackParamList } from "../App";
import Paragraph from "../styling Components/Paragraph";
import Tag from "../styling Components/Tag";

type HomeScreenProp = StackNavigationProp<DishStackParamList, "Shop">;

type ShopProps = {
  id: string;
  name: string;
  tags: string[];
  price: number;
  TimeToCook: number;
  imageName: string;
};
const ShopCard: React.FC<ShopProps> = (props: ShopProps) => {
  const navigation = useNavigation<HomeScreenProp>();
  const handleNavigate = () => {
    navigation.navigate("Dish", { id: props.id });
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={handleNavigate}>
          <Image
            style={{ width: "100%", height: 350 }}
            resizeMode="cover"
            source={{
              uri: props.imageName,
            }}
          />
          <StarRating rating={4} />
          <H4 heading={props.name} />
          <Paragraph para={`Average Time To Cook :${props.TimeToCook} min`} />
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {props.tags.map((el, i) => {
              return <Tag text={el} key={i} />;
            })}
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "ternary",
              }}
            >
              Price : ${props.price}
            </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
  },
});

export default ShopCard;
