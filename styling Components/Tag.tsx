import { Text, View } from "react-native";

interface Heading {
  text: string;
}

const Tag: React.FunctionComponent<Heading> = (props: Heading) => {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            flexWrap: "wrap",
            fontFamily: "secondary",
            color: "#dcca87",
            fontSize: 14,
            backgroundColor: "#242424",
            padding: 6,
            marginRight: 15,
            marginBottom: 15,
          }}
        >
          {props.text}
        </Text>
      </View>
    </>
  );
};

export default Tag;
