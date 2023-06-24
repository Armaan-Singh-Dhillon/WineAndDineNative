import React, { FC } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface StarRatingProps {
  rating: number;
}

const StarRating: FC<StarRatingProps> = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
      const iconName = i <= rating ? "ios-star" : "ios-star-outline";
      const starColor = i <= rating ? "#dcca87" : "#D3D3D3";

      stars.push(
        <TouchableOpacity
          activeOpacity={0.7}
          key={i}
        >
          <Ionicons name={iconName} size={20} color={starColor} />
        </TouchableOpacity>
      );
    }

    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width:'50%',
    justifyContent:"space-between"
  },
});

export default StarRating;
