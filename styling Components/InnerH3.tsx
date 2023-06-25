import { Text, View } from "react-native";

interface Heading {
  heading: string;
}

const InnerH3: React.FunctionComponent<Heading> = (props: Heading) => {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            flex: 1,
            flexWrap: "wrap",
            fontFamily: "secondary",
            color: "#fff",
            fontSize: 18,
            marginBottom: 15,
          }}
        >
          {props.heading}
        </Text>
      </View>
    </>
  );
};

export default InnerH3;
