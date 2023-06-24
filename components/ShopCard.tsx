import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import H4 from "../styling Components/H4";
import StarRating from "./Star";
import { StackNavigationProp } from "@react-navigation/stack";
import { DishStackParamList } from "../App";

type HomeScreenProp = StackNavigationProp<DishStackParamList, "Shop">;

const ShopCard: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const handleNavigate = () => {
    navigation.navigate("Dish");
  };
  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={handleNavigate}>
          <Image
            style={{ width: "100%", height: 300 }}
            source={require("../assets/dishes/burger.jpg")}
          />
          <H4 heading="Asian Burger" />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <StarRating rating={4} />
            <Text
              style={{
                color: "#fff",
                fontFamily: "ternary",
              }}
            >
              Price : $14
            </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    width: "80%",
    borderWidth: 2,
  },
});

export default ShopCard;
