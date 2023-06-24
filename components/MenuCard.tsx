import { View, Text } from "react-native";
import Paragraph from "../styling Components/Paragraph";
import { MenuCardInterface } from "../localData/wineAndCocktails";
const MenuCard = ({ data }: { data: MenuCardInterface }) => {
  return (
    <View style={{margin:6}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#dcca87",
            fontFamily: "primary",
          }}
        >
          {data.name}
        </Text>
        <View
          style={{
            flex: 0.9,
            height: "50%",
            borderBottomColor: "#fff",
            borderBottomWidth: 1,
          }}
        ></View>
        <Text
          style={{
            fontSize: 12,
            color: "#fff",
            fontFamily: "secondary",
          }}
        >
          ${data.price}
        </Text>
      </View>
      <Text>
        <Paragraph para={data.description} />
      </Text>
    </View>
  );
};

export default MenuCard;
