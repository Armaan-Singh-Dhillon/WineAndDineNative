import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import H1 from "../styling Components/H1";
import Input from "../styling Components/Input";
import Password from "../styling Components/Password";
import { useState } from "react";
import Button from "../styling Components/Button";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { MyContext } from "../MyContext";
import { useContext } from "react";
type LogicComponent = {
  changeLogic: () => void;
};

const Login: React.FunctionComponent<LogicComponent> = (
  props: LogicComponent
) => {
  const { updateVisibility } = useContext(MyContext);
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const updateEmail = (text: string) => {
    setEmail(text);
  };
  const updatePassword = (text: string) => {
    setPassword(text);
  };

  async function handleLogin() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      updateVisibility();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <H1 heading=" Login" />
      <View style={styles.section}>
        <Input text="Email" handleChange={updateEmail} />
      </View>
      <View style={styles.section}>
        <Password text="Password" handleChange={updatePassword} />
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
            Don't Have An Account ?
          </Text>
        </Pressable>

        <Button text="Submit" clickHandler={handleLogin} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
});

export default Login;
