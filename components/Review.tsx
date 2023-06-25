import { Text, View } from "react-native";
import H2 from "../styling Components/H2";
import H4 from "../styling Components/H4";
import Paragraph from "../styling Components/Paragraph";
import StarRating from "./Star";
const Review = () => {
  const dishData = {
    reviews: {
      dishName: "Spicy Thai Basil Chicken",
      averageRating: 4.5,
      totalReviews: 27,
      customerReviews: [
        {
          name: "John Smith",
          rating: 5,
          review:
            "Absolutely delicious! The perfect balance of flavors. The chicken was tender, and the spiciness was just right.",
          date: "2023-06-01",
        },
        {
          name: "Emily Johnson",
          rating: 4,
          review:
            "I enjoyed the dish, especially the aromatic basil. It had a good level of spiciness, and the chicken was cooked well.",
          date: "2023-05-28",
        },
        {
          name: "Michael Davis",
          rating: 4.5,
          review:
            "Great dish! The flavors were authentic, and the portion size was generous. Will definitely order again.",
          date: "2023-05-25",
        },
        {
          name: "Sarah Thompson",
          rating: 3.5,
          review:
            "The dish had good flavor, but it was slightly too spicy for my taste. The chicken could have been more tender.",
          date: "2023-05-20",
        },
        {
          name: "David Wilson",
          rating: 5,
          review:
            "This dish was outstanding! The flavors were bold and well-balanced. Definitely a must-try.",
          date: "2023-05-15",
        },
      ],
    },
  };
  const sortedReviews = [...dishData.reviews.customerReviews].sort(
    (a, b) => b.rating - a.rating
  );

  const maxReviews = 3;
  const slicedReviews = sortedReviews.slice(0, maxReviews);
  return (
    <>
      <View>
        <H2 heading="Top Reviews" />
        {slicedReviews.map((el, i) => {
          return (
            <View key={i}>
              <H4 heading={el.name} />
              <StarRating rating={el.rating} />
              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontFamily: "secondary",
                }}
              >
                {el.date}
              </Text>
              <Paragraph para={el.review} />
            </View>
          );
        })}
      </View>
    </>
  );
};

export default Review;
