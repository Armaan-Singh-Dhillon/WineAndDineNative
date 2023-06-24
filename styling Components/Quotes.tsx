import { Text, View } from "react-native";

const Quotes: React.FunctionComponent = (props) => {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            flex: 1,
            flexWrap: "wrap",
            fontFamily: "primary",
            color: "#fff",
            fontSize: 40,
          }}
        >
          "
        </Text>
      </View>
    </>
  );
};

export default Quotes;
