import { Text, View} from "react-native";

interface Heading {
  heading: string;
}


const H1: React.FunctionComponent<Heading> = (props: Heading) => {
  
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            flex:1,
            flexWrap:"wrap",
            fontFamily: "primary",
            color: "#dcc87a",
            fontSize: 48,
            marginBottom:20
          }}
        >
          {props.heading}
        </Text>
      </View>
    </>
  );
};



export default H1;
