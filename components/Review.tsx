import { Text, View } from "react-native";
import H2 from "../styling Components/H2";
import H4 from "../styling Components/H4";
import Paragraph from "../styling Components/Paragraph";
import StarRating from "./Star";

type CustomerReview = {
  reviews: {
    name: string;
    date: string;
    rating: number;
    review: string;
  }[];
};

const Review: React.FC<CustomerReview> = (props: CustomerReview) => {
  const sortedReviews = [...props.reviews].sort((a, b) => b.rating - a.rating);

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
