import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React from "react";
import H1 from "../styling Components/H1";
import Input from "../styling Components/Input";
import Password from "../styling Components/Password";
import { useState } from "react";
import Button from "../styling Components/Button";
import DInput from "../styling Components/Dinput";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { MyContext } from "../MyContext";
import { useContext } from "react";
import db from "../firebaseConfig";
type LogicComponent = {
  changeLogic: () => void;
};
const SignUp: React.FunctionComponent<LogicComponent> = (
  props: LogicComponent
) => {
  const { updateVisibility } = useContext(MyContext);
  const auth = getAuth();
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const updateName = (text: string) => {
    setName(text);
  };
  const updateEmail = (text: string) => {
    setemail(text);
  };
  const updatePassword = (text: string) => {
    setPassword(text);
  };
  const updateAddress = (text: string) => {
    setAddress(text);
  };
  const updateMobile = (text: string) => {
    setPhoneNumber(text);
  };
  async function handleRegister() {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateVisibility();

      await setDoc(doc(db, "user", user.uid), {
        id: user.uid,
        name,
        email,
        address,
        phoneNumber,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <H1 heading=" Sign Up" />
      <View style={styles.section}>
        <Input text="Name" handleChange={updateName} />
      </View>
      <View style={styles.section}>
        <Input text="Email" handleChange={updateEmail} />
      </View>
      <View style={styles.section}>
        <Password text="Password" handleChange={updatePassword} />
      </View>
      <View style={styles.section}>
        <Input text="Address" handleChange={updateAddress} />
      </View>
      <View style={styles.section}>
        <DInput text="Mobile" handleChange={updateMobile} />
      </View>

      <View style={{ alignItems: "center" }}>
        <Pressable onPress={props.changeLogic}>
          <Text
            style={{
              fontFamily: "secondary",
              fontSize: 12,
              color: "#aaa",
              marginBottom: 10,
            }}
          >
            Already Have An Account ?
          </Text>
        </Pressable>
        <Button text="Submit" clickHandler={handleRegister} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
});
export default SignUp;
