import { Text, View, ScrollView, Image, FlatList } from "react-native";
import MenuCard from "../components/MenuCard";
import H3 from "../styling Components/H3";
import H1 from "../styling Components/H1";
import H4 from "../styling Components/H4";
import wine from "../localData/wineAndCocktails";
import cocktail from "../localData/cocktail";
import apetizers from "../localData/apetizers";
import mainCourses from "../localData/Maincourse";
const Menu: React.FunctionComponent = () => {
  const handleCLick = () => {};

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
          <View style={{ flex: 1, marginBottom: 10, marginTop: 60 }}>
            <View>
              <H4 heading={"Menu That Fits You Palatte"} />
              <H1 heading={"Today's Special"} />
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <H3 heading="Wine & Beer" />

            {wine.map((item) => {
              return <MenuCard data={item} key={item.id.toString()} />;
            })}
            <View style={{ width: "100%", marginBottom: 60, marginTop: 60 }}>
              <Image
                resizeMode="contain"
                source={require("../assets/background/bottle.png")}
              />
            </View>

            {cocktail.map((item) => {
              return <MenuCard data={item} key={item.id.toString()} />;
            })}
          </View>
        </View>
        <View style={{ flex: 1, marginBottom: 10, marginTop: 60 }}>
          <View>
            <H1 heading={"Appetizers"} />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {apetizers.map((item) => {
            return <MenuCard data={item} key={item.id.toString()} />;
          })}
        </View>
        <View style={{ flex: 1, marginBottom: 10, marginTop: 60 }}>
          <View>
            <H1 heading={"Main Courses"} />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {mainCourses.map((item) => {
            return <MenuCard data={item} key={item.id.toString()} />;
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default Menu;
