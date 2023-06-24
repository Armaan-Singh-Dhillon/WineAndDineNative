import { Text, View } from "react-native";

interface Heading {
  heading: string;
}

const InnerH1: React.FunctionComponent<Heading> = (props: Heading) => {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            flex: 1,
            flexWrap: "wrap",
            fontFamily: "secondary",
            color: "#fff",
            fontSize: 25,
            marginBottom: 20,
            textAlign:'center'
          }}
        >
          {props.heading}
        </Text>
      </View>
    </>
  );
};

export default InnerH1;
