import { Text, View, Pressable } from "react-native";

interface Button {
  text: string;
  clickHandler: () => void;
}

const Paragraph: React.FunctionComponent<Button> = (props: Button) => {
  return (
    <>
      <View style={{ flexDirection: "row" ,width:'100%' }}>
        <Pressable
          onPress={props.clickHandler}
          style={{
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              fontFamily: "primary",
              color: "#000",
              fontSize: 15,
              marginBottom: 20,
              backgroundColor: "#dcc87a",
              padding:10
            }}
          >
            {props.text}
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default Paragraph;
