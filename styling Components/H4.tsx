import { Text, View } from "react-native";

interface Heading {
  heading: string;
}

const H4: React.FunctionComponent<Heading> = (props: Heading) => {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            flexWrap: "wrap",
            fontFamily: "primary",
            color: "#fff",
            fontSize: 20,
            marginBottom: 20,
          }}
        >
          {props.heading}
        </Text>
      </View>
    </>
  );
};

export default H4;
