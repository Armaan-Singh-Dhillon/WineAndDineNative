import { Text, View, Pressable } from "react-native";

interface Button {
  text: string;
  clickHandler: () => void;
}

const Button: React.FunctionComponent<Button> = (props: Button) => {
  return (
    <>
      <Pressable onPress={props.clickHandler}>
        <Text
          style={{
            fontFamily: "primary",
            color: "#000",
            fontSize: 15,
            backgroundColor: "#dcca87",
            padding: 10,
          }}
        >
          {props.text}
        </Text>
      </Pressable>
    </>
  );
};

export default Button;
