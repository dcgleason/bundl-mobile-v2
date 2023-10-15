import * as React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { Button, TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MyContext } from '../components/MyProvider';
import { useState, useContext } from 'react';

const IPhone1422 = () => {
  const navigation = useNavigation();
  const textInputRef = React.useRef(null);
  const [personalizedMessage, setPersonalizedMessage] = useState('');
  const { setSharedSelectedMessage, sharedRecipientName } = useContext(MyContext);



  const handleDonePress = () => {
    if (textInputRef.current) {
      textInputRef.current.blur();
    }
  };

  const handlePreviewEmail = () => {
    setSharedSelectedMessage(personalizedMessage);
    navigation.navigate("IPhone1425");
  };

  const getFirstName = (name) => {
    return name ? name.split(' ')[0] : "Recipient";
}

const firstName = getFirstName(sharedRecipientName);
  


  return (
    <View style={styles.iphone1422}>
      <Text style={[styles.newBundle, styles.newBundleTypo]}>New Bundl</Text>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      {/* <Image
        style={[styles.iphoneXTopNavbarLight, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iphone-x--top-navbar--light4.png")}
      /> */}
      <View style={styles.textFields}>
        <Text
          style={[styles.addAPersonalized, styles.newBundleTypo]}
        >{`Add a personalized 
message to your contributors.`}</Text>
      </View>

      
      <Button
        style={[styles.next, { backgroundColor: '#d49797'}]}
        mode="contained"
        labelStyle={styles.nextBtn}
        onPress={() => handlePreviewEmail()} // Updated here
      >
        Preview Message
      </Button>
      <View style={styles.homeIndicatorLight}>
        <View style={[styles.homeIndicator, styles.saveAsDraftPosition]} />
      </View>
      <TextInput
      style={[styles.egWhatDo, styles.of3Typo]}
      placeholder={
        `Hey there! ${sharedRecipientName? firstName: "Recipient"} is turning 30 and I'm putting together a special keepsake book filled with heartfelt letters, pictures, and even audio messages from the import people in ${sharedRecipientName? firstName+"'s": "recipient's"} life.\n\n` +
        `I'd love for you to be a part of this! Please reply with a note, an audio message, or a picture. If you're not sure what to say, feel free to use one of these prompts:`
      }
      placeholderTextColor="#cdcdcd"
      multiline={true}
      value={personalizedMessage}
      onChangeText={text => setPersonalizedMessage(text)}
      returnKeyType="done"
      blurOnSubmit={true}
      onSubmitEditing={handleDonePress}
    />
      {/* <Button
        style={[styles.saveAsDraft, styles.saveAsDraftPosition]}
        mode="elevated"
        labelStyle={styles.saveAsDraftBtn}
        // contentStyle={styles.saveAsDraftBtn1}
      >
        Save as Draft
      </Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  nextBtn: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    backgroundColor: "#d49797"
  },
  frame3: {
    width: 328,
    height: 180,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  frame4: {
    width: 326,
    height: 160,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  egWhatDo: {
    width: "82.05%",
    top: "32.94%",
    fontSize: 22,
    left: "8.72%",
  },
  of3Typo: {
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    position: "absolute",
  },
  whoIsThis: {
    position: "relative",
    fontSize: 25,
    letterSpacing: 0.1,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#14304a",
    textAlign: "left",
  },
  textFields: {
    width: 257,
    height: 34,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 69,
    },
  nextBtn1: {
    height: "6.64%",
    width: "83.85%",
  },
  saveAsDraftBtn: {
    color: "#878787",
    fontSize: 15,
    fontFamily: "Inter-Regular",
  },
  saveAsDraftBtn1: {
    marginLeft: -48,
  },
  newBundleTypo: {
    color: "#14304a",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  saveAsDraftPosition: {
    left: "29%",
    position: "absolute",
  },
  newBundle: {
    left: "38.97%",
    fontSize: 15,
    textAlign: "center",
    top: "10.78%",
    position: "absolute",
  },
  icon: {
    height: "2.13%",
    width: "3.33%",
    right: "87.95%",
    bottom: "87.09%",
    left: "8.72%",
    top: "10.78%",
  },
  iphoneXTopNavbarLight: {
    height: "5.21%",
    width: "96.15%",
    top: "0.59%",
    right: "1.28%",
    bottom: "94.19%",
    left: "2.56%",
  },
  addAPersonalized: {
    fontSize: 28,
    textAlign: "left",
  },
  textFields: {
    marginTop: -260,
    width: "79.23%",
    top: "50%",
    right: "12.82%",
    left: "7.95%",
    position: "absolute",
  },
  next: {
    top: "87.44%",
    right: "7.95%",
    bottom: "5.92%",
    left: "8.21%",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: 100,
    backgroundColor: "#191052",
    width: 134,
    height: 5,
  },
  homeIndicatorLight: {
    height: "4.98%",
    width: "99.23%",
    top: "95.02%",
    right: "0%",
    bottom: "0%",
    left: "0.77%",
    position: "absolute",
  },
  egHiFor: {
    width: "82.05%",
    top: "34.6%",
    left: "8.72%",
    position: "absolute",
  },
  saveAsDraft: {
    top: 693,
  },
  iphone1422: {
    backgroundColor: "#fafafa",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1422;
