import { Text, View, Pressable, TextInput } from "react-native";

interface Button {
  text: string;
  handleChange: (text: string) => void;
}

const Password: React.FunctionComponent<Button> = (props: Button) => {
  return (
    <>
      <TextInput
        cursorColor={"#dcc87a"}
        secureTextEntry={true}
        placeholder={props.text}
        placeholderTextColor={"#aaa"}
        onChangeText={(text) => props.handleChange(text)}
        style={{
          backgroundColor: "#242424",
          padding: 10,
          fontSize: 10,
          color: "#aaa",
          fontFamily: "secondary",
          borderColor: "#dcc87a",
          borderWidth: 1,
        }}
      />
    </>
  );
};

export default Password;
