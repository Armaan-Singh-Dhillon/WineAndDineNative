import { View, Text } from "react-native";
import H1 from "../styling Components/H1";
import Checkbox from "expo-checkbox";
import { useState } from "react";

interface Check {
  text: string;
}

const Checks: React.FC<Check> = (props: Check) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            color: "#aaa",
            fontFamily: "secondary",
            fontSize: 15,
            marginBottom: 6,
          }}
        >
          {props.text} :
        </Text>

        <Checkbox
          color="#dcc87a"
          value={isChecked}
          onValueChange={setChecked}
        />
      </View>
    </>
  );
};

export default Checks;
