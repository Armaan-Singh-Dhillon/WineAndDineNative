import { Text, View, ScrollView, Image } from "react-native";
import H1 from "../styling Components/H1";
import H2 from "../styling Components/H2";
import Paragraph from "../styling Components/Paragraph";
import Button from "../styling Components/Button";
import H4 from "../styling Components/H4";
import Quotes from "../styling Components/Quotes";
import Subscription from "./Subscription";
const Home: React.FunctionComponent = () => {
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
          <View
            style={{
              flex: 1,
              marginBottom: 60,
              marginTop: 60,
              alignItems: "flex-start",
            }}
          >
            <H1 heading={"Food That Surprise You"} />

            <Paragraph para="As you step into the elegant and contemporary space, you are immediately greeted by a warm and inviting ambiance. The meticulously designed interior, adorned with exquisite artwork and soft lighting, creates an intimate atmosphere that sets the stage for an unforgettable evening." />
            <View>
              <Button text="Explore Menu" clickHandler={handleCLick} />
            </View>
            <Image
              style={{ width: "100%", maxWidth: 500, height: 450 }}
              resizeMode="contain"
              source={require("../assets/cusine/cusine.png")}
            />
          </View>
          <View style={{ flex: 1, marginBottom: 60, marginTop: 60 }}>
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
        <Subscription />
      </ScrollView>
    </>
  );
};

export default Home;
