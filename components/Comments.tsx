import { View, Text } from "react-native";
import React from "react";
import H4 from "../styling Components/H4";
import H2 from "../styling Components/H2";
import StarRating from "./Star";
import { Comment } from "../types/blog";
import Paragraph from "../styling Components/Paragraph";
import { useEffect, useState } from "react";
type Prop = {
  comment: Comment[];
};

const Comments: React.FunctionComponent<Prop> = (props: Prop) => {
  const [data, setdata] = useState(props.comment);

  return (
    <View>
      <H2 heading="Comments" />
      {data.map((el, i) => {
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
  );
};

export default Comments;
