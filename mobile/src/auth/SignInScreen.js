import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, Title } from "react-native-paper";
import MasterPassword from "../password/MasterPassword";
import TextInput from "../ui/TextInput";
import Styles from "../ui/Styles";
import { addError } from "../errors/errorsActions";
import { signIn } from "./authActions";
import routes from "../routes";
import { useNavigation } from "@react-navigation/native";
import { setSettings } from "../settings/settingsActions";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const encryptMasterPassword = useSelector(
    (state) => state.settings.encryptMasterPassword
  );
  const baseURL = useSelector((state) => state.settings.baseURL);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={Styles.innerContainer}>
          <Title style={Styles.title}>Connect to your Lesspass Database</Title>
          <TextInput
            mode="outlined"
            label="LessPass Database Url"
            value={baseURL}
            onChangeText={(text) => dispatch(setSettings(text))}
          />
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text.trim())}
          />
          <MasterPassword
            label={encryptMasterPassword ? "Master Password" : "Password"}
            masterPassword={password}
            hideFingerprint={!encryptMasterPassword}
            onChangeText={(password) => setPassword(password)}
          />
          <Button
            icon={"account-circle"}
            mode="contained"
            style={{
              marginTop: 10,
              marginBottom: 30,
            }}
            disabled={isEmpty(email) || isEmpty(password) || isLoading}
            onPress={() => {
              setIsLoading(true);
              dispatch(
                signIn(
                  {
                    email,
                    password,
                  },
                  encryptMasterPassword
                )
              )
                .then(() => navigation.navigate(routes.PASSWORD_GENERATOR))
                .catch(() => {
                  setIsLoading(false);
                  let errorMessage =
                    "Unable to log in with provided credentials.";
                  if (encryptMasterPassword) {
                    errorMessage +=
                      " Your master password is encrypted. Uncheck this option in your settings if you don't use it.";
                  }
                  dispatch(addError(errorMessage));
                });
            }}
          >
            Sign In
          </Button>
          <Button
            mode="text"
            onPress={() => navigation.navigate(routes.SIGN_UP)}
          >
            Create an account
          </Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
