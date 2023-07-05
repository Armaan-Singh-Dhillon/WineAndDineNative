import { View, Text, TextInput } from "react-native";
import React from "react";
import Button from "../styling Components/Button";
import H3 from "../styling Components/H3";

type TextArea = {
  bind: (text: string) => void;
  onSubmit: () => void;
};

const AddComments: React.FunctionComponent<TextArea> = (props: TextArea) => {
  return (
    <View>
      <H3 heading="Add Your Reviews" />
      <TextInput
        multiline
        numberOfLines={6}
        placeholderTextColor={"#aaa"}
        cursorColor={"#dcc87a"}
        placeholder="Add Your Comment"
        style={{
          backgroundColor: "#242424",
          color: "#dcc87a",
          fontFamily: "secondary",
          padding: 10,
          marginBottom: 10,
        }}
        onChangeText={(t) => props.bind(t)}
      />
      <View style={{ alignItems: "center" }}>
        <Button text="Submit" clickHandler={props.onSubmit} />
      </View>
    </View>
  );
};

export default AddComments;
