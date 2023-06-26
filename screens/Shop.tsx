import { Text, View, ScrollView, Image } from "react-native";
import InnerH1 from "../styling Components/InnerH1";
import ShopCard from "../components/ShopCard";
import { MyContext } from "../MyContext";
import { useContext } from "react";
const Shop: React.FunctionComponent = () => {
  const { dishData } = useContext(MyContext);
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "black",
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View style={{ position: "relative" }}>
            <View
              style={{
                zIndex: 2,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InnerH1 heading="Welcome To Our Shop" />
            </View>
            <Image
              style={{ width: "100%", height: 200, opacity: 0.6 }}
              resizeMode="cover"
              source={require("../assets/banner/01-min-scaled.jpg")}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Shop;
