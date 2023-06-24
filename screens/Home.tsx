import { Text, View, ScrollView, Image } from "react-native";
import H1 from "../styling Components/H1";
import H2 from "../styling Components/H2";
import CardItem from "../components/CardItem";
import Paragraph from "../styling Components/Paragraph";
import Button from "../styling Components/Button";
import H4 from "../styling Components/H4";
import Quotes from "../styling Components/Quotes";
const Home: React.FunctionComponent = () => {
  const handleCLick = () => {};
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "black", padding: 15 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 ,marginBottom:60,marginTop:60}}>
            <H1 heading={"Food That Surprise You"} />

            <Paragraph para="Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus" />
            <Button text="Explore Menu" clickHandler={handleCLick} />

            <CardItem />
          </View>
          <View style={{flex:1 ,marginBottom:60,marginTop:60}}>
            <H4 heading={"Chef's Word"} />
            <H2 heading={"What We Believe In"} />
            <Quotes />

            <Paragraph para="Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc." />

            <H4 heading="Kevin Luo" />
            <Paragraph para="Chef & Founder" />

            <Image
              style={{ width: "50%", alignSelf: "flex-start" }}
              resizeMode="contain"
              source={require("../assets/chef/main/Kevin-Luo-sign.png")}
            />
            <Image
              style={{ width: "100%", maxWidth: 500, height: 450 }}
              resizeMode="contain"
              source={require("../assets/chef/main/chef-kevin.png")}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
