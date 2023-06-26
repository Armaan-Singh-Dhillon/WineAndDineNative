import { Text, View, ScrollView, StyleSheet } from "react-native";
import Input from "../styling Components/Input";
import Button from "../styling Components/Button";
import { Ionicons } from "@expo/vector-icons";

const Subscription: React.FunctionComponent = () => {
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
            borderColor: "#dcc87a",
            borderWidth: 2,
            padding: 20,
            marginTop: 20,
          }}
        >
          <Text style={styles.contextHeading}>NewsLetter</Text>
          <Text style={styles.mainHeading}>Subscribe To Our NewsLetter</Text>
          <Text style={styles.text}>And never miss latest Updates!</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 0.8 }}>
              <Input text="Enter Your Email Address" />
            </View>

            <Button clickHandler={handleCLick} text="Subscribe" />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.contextHeading}>Contact Us</Text>
          <Text style={styles.text}>9 W 53rd St, New York, NY 10019, USA</Text>
          <Text style={styles.text}>+1 212-344-1230</Text>
          <Text style={styles.text}>+1 212-555-1230</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.mainHeading}>Wine And Dine</Text>
          <Text style={styles.text}>
            “The best way to find yourself is to lose yourself in the service of
            others.”
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 0.5,
                justifyContent: "space-between",
              }}
            >
              <Ionicons name="logo-facebook" size={25} color="#dcc87a" />
              <Ionicons name="logo-instagram" size={25} color="#dcc87a" />
              <Ionicons name="logo-twitter" size={25} color="#dcc87a" />
              <Ionicons name="logo-pinterest" size={25} color="#dcc87a" />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.contextHeading}>Working Hours</Text>

          <Text style={styles.text}>Monday-Friday:</Text>
          <Text style={styles.text}>08:00 am -12:00 am</Text>
          <Text style={styles.text}>Saturday-Sunday:</Text>
          <Text style={styles.text}>07:00am -11:00 pm</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contextHeading: {
    flex: 1,
    flexWrap: "wrap",
    fontFamily: "primary",
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  mainHeading: {
    flex: 1,
    flexWrap: "wrap",
    fontFamily: "primary",
    color: "#dcc87a",
    fontSize: 30,
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    flex: 1,
    flexWrap: "wrap",
    fontFamily: "secondary",
    color: "#aaa",
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center",
  },
  section: { marginTop: 25 },
});

export default Subscription;
