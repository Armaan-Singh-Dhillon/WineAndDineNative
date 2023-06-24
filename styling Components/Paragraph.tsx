import { Text, View } from "react-native";

interface para {
  para: string;
}

const Paragraph: React.FunctionComponent<para> = (props: para) => {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            flex: 1,
            flexWrap: "wrap",
            fontFamily: "ternary",
            color: "#aaa",
            fontSize: 12,
            marginBottom:20
            
          }}
        >
          {props.para}
        </Text>
      </View>
    </>
  );
};

export default Paragraph;
