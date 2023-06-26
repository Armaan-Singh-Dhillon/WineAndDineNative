import { Text, View, Pressable, TextInput } from "react-native";

interface Button {
  text: string;
}

const Input: React.FunctionComponent<Button> = (props: Button) => {
  return (
    <>
      <TextInput
        placeholder={props.text}
        placeholderTextColor={"#aaa"}
        style={{
          backgroundColor: "#242424",
          padding: 10,
          fontSize: 10,
          color: "#aaa",
          fontFamily: "secondary",
          borderColor: "white",
          borderWidth: 1,
        }}
      />
    </>
  );
};

export default Input;
