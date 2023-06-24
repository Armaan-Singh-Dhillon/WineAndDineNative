import { Text, View } from "react-native";

interface Heading {
  heading: string;
}

const H3: React.FunctionComponent<Heading> = (props: Heading) => {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            flex: 1,
            flexWrap: "wrap",
            fontFamily: "primary",
            color: "#fff",
            fontSize: 25,
            marginBottom: 20,
          }}
        >
          {props.heading}
        </Text>
      </View>
    </>
  );
};

export default H3;
