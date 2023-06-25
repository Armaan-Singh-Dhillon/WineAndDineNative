import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
interface para {
  para: string;
}

const Pointers: React.FunctionComponent<para> = (props: para) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <Text
          style={{
            flex: 1,
            flexWrap: "wrap",
            fontFamily: "ternary",
            color: "#aaa",
            fontSize: 12,
          }}
        >
          <Ionicons name="book" size={10} color="#dcc87a" />
          <Text> {props.para}</Text>
        </Text>
      </View>
    </>
  );
};

export default Pointers;
