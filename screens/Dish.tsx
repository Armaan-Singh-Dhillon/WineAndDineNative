import { StyleSheet, View, Image, ScrollView } from "react-native";
import H2 from "../styling Components/H2";
import StarRating from "../components/Star";
import InnerH3 from "../styling Components/InnerH3";
import Paragraph from "../styling Components/Paragraph";
import Tag from "../styling Components/Tag";
import Cook from "../components/Cook";
import Ingredients from "../components/Ingredients";
import Supplements from "../components/Supplements";
import Review from "../components/Review";
import SalesAndOffers from "../components/SalesAndOffers";
import Toppings from "../components/Toppings";
import { RouteProp, useRoute } from "@react-navigation/native";
import { DishStackParamList } from "../App";
import { useContext } from "react";
import { MyContext } from "../MyContext";
import DishType from "../types/dish";
import Subscription from "./Subscription";
const Dish: React.FC = () => {
  const { dishData } = useContext(MyContext);
  const route = useRoute<RouteProp<DishStackParamList, "Dish">>();
  const desiredId = route.params.id;

  const filteredObject = dishData.find((el: DishType) => el.id === desiredId)!;

  return (
    <>
      <ScrollView style={styles.root}>
        <View>
          <View>
            <Image
              style={{ width: "100%", height: 350 }}
              resizeMode="cover"
              source={{
                uri: filteredObject.image,
              }}
            />
            <H2 heading={filteredObject.name} />
            <StarRating rating={filteredObject.reviews.averageRating} />
            <InnerH3 heading={`Price : $${filteredObject.price}`} />
            <Paragraph para={filteredObject.description} />
            <InnerH3 heading="Tags" />
            <View style={styles.tagContainer}>
              {filteredObject.tags.map((el, i) => {
                return <Tag text={el} key={i} />;
              })}
            </View>
            <Toppings options={filteredObject.options} />
            <Cook
              averageTimeToCook={filteredObject.averageTimeToCook}
              deliveryTime={filteredObject.deliveryTime}
              fatContent={filteredObject.fatContent}
              proteinContent={filteredObject.protein}
            />

            <Ingredients ingredients={filteredObject.ingredients} />
            <Supplements
              beverages={filteredObject.supplements.beverages}
              foodDrinks={filteredObject.supplements.foodDrinks}
            />
            <Review reviews={filteredObject.reviews.customerReviews} />
            <SalesAndOffers salesAndOffers={filteredObject.salesAndOffers} />
          </View>
        </View>
        <Subscription />
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
